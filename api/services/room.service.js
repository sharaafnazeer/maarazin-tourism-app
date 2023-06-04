const {RecordNotFound} = require("../exceptions/errors");
const {Room} = require("../models/room.model");
const {Hotel} = require("../models/hotel.model");
const {Facility} = require("../models/facility.model");
const addRoom = async (roomInfo) => {
    try {

        const hotel = await Hotel.findById(roomInfo.hotelId);
        if (!hotel) {
            return new RecordNotFound("Hotel not found", "Hotel with given ID not found");
        }

        let roomFacilities = []
        if (roomInfo.facilities)
            roomFacilities = JSON.parse(roomInfo.facilities);

        const newFacilities = [];
        for (const roomFacility of roomFacilities) {
            const facility = await Facility.findById(roomFacility.facilityId);
            if (!facility) {
                return new RecordNotFound("Facility not found", "Facility ID not found");
            }
            newFacilities.push({
                facility: roomFacility.facilityId,
                isPopular: roomFacility.isPopular,
                haveExtraFee: roomFacility.haveExtraFee,
                amount: roomFacility.amount
            });
        }


        const room = new Room({
            name: roomInfo.name,
            roomArea: roomInfo.roomArea,
            roomImages: roomInfo.roomImages,
            benefits: roomInfo.benefits,
            sleeps: {
                adults: parseInt(roomInfo.numOfAdults),
                children: parseInt(roomInfo.numOfChild),
            },
            roomPrice: parseFloat(roomInfo.roomPrice),
            hotel: hotel.id,
            facilities: newFacilities,
        });
        const savedRoom = await room.save()
        hotel.rooms.push(savedRoom.id);
        hotel.save();
        return savedRoom;
    } catch (e) {
        throw e;
    }
}

const updateRoom = async (roomId, roomInfo) => {
    try {
        let room = await Room.findById(roomId);
        if (!room) {
            return new RecordNotFound("Room not found", "Room with given ID not found");
        }

        room.name = roomInfo.name || room.name;
        room.benefits = roomInfo.benefits || room.benefits;
        room.roomArea = roomInfo.roomArea || room.roomArea;
        room.roomPrice = parseFloat(roomInfo.roomPrice) || parseFloat(room.roomPrice);

        let existingRoomImages = []
        let roomImages = []
        if (roomInfo.existingRoomImages)
            existingRoomImages = JSON.parse(roomInfo.existingRoomImages);

        if (roomInfo.roomImages)
            roomImages = roomInfo.roomImages;

        if (roomImages.length || existingRoomImages.length)
            room.roomImages = [...roomImages, ...existingRoomImages];

        room.sleeps = {
            ...room.sleeps,
            adults: parseInt(roomInfo.numOfAdults) || parseInt(room.sleeps.adults),
            children: parseInt(roomInfo.numOfChild) || parseInt(room.sleeps.children)
        }

        room.save();
        return room;
    } catch (e) {
        throw e;
    }
}

const getRooms = async () => {
    try {
        return await Room.find()
    } catch (e) {
        throw e;
    }
}

const getRoomById = async (roomId) => {
    try {
        const room = await Room.findById(roomId)
        if (!room) {
            return new RecordNotFound("Room not found", "Room with given ID not found");
        }
        return room;
    } catch (e) {
        throw e;
    }
}

const getRoomsByHotelId = async (hotelId) => {
    try {
        return await Room.find({hotel: hotelId}).populate('hotel');
    } catch (e) {
        throw e;
    }
}

module.exports = {
    addRoom,
    getRooms,
    getRoomById,
    updateRoom,
    getRoomsByHotelId,
}