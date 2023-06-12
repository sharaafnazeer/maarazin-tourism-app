const {RecordNotFound} = require("../exceptions/errors");
const {Room} = require("../models/room.model");
const {Hotel} = require("../models/hotel.model");
const {Facility} = require("../models/facility.model");
const {Addon} = require("../models/addon.model");
const {getAllCombinations} = require("../helpers/helpers");
const addRoom = async (roomInfo) => {
    try {

        const hotel = await Hotel.findById(roomInfo.hotelId);
        if (!hotel) {
            return new RecordNotFound("Hotel not found", "Hotel with given ID not found");
        }

        const newAddons = [];
        if (roomInfo.addons) {
            const roomAddons = JSON.parse(roomInfo.addons);
            if (Array.isArray(roomAddons)) {
                for (const roomAddon of roomAddons) {
                    const addon = await Addon.findById(roomAddon.addonId);
                    if (!addon) {
                        return new RecordNotFound("Addon not found", "Addon ID not found");
                    }
                    newAddons.push({
                        addon: roomAddon.addonId, isActive: true, amount: roomAddon.amount
                    });
                }
            }
        }

        let newFacilities = [];
        if (roomInfo.facilities) {
            const facilities = JSON.parse(roomInfo.facilities)
            if (Array.isArray(facilities)) {
                for (const facility of facilities) {
                    const popular = await Facility.findById(facility.toString());
                    if (!popular) {
                        return new RecordNotFound("Facility not found", "Facility with given ID not found");
                    }
                }
                newFacilities = facilities
            }
        }

        const room = new Room({
            name: roomInfo.name,
            roomArea: roomInfo.roomArea,
            roomImages: roomInfo.roomImages,
            benefits: roomInfo.benefits,
            sleeps: {
                adults: parseInt(roomInfo.numOfAdults), children: parseInt(roomInfo.numOfChild),
            },
            roomPrice: parseFloat(roomInfo.roomPrice),
            hotel: hotel.id,
            facilities: newFacilities,
            addons: newAddons,
        });

        if (roomInfo.amenities) {
            room.amenities = JSON.parse(roomInfo.amenities);
        }
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
        if (roomInfo.existingRoomImages) existingRoomImages = JSON.parse(roomInfo.existingRoomImages);

        if (roomInfo.roomImages) roomImages = roomInfo.roomImages;

        if (roomImages.length || existingRoomImages.length) room.roomImages = [...roomImages, ...existingRoomImages];

        room.sleeps = {
            ...room.sleeps,
            adults: parseInt(roomInfo.numOfAdults) || parseInt(room.sleeps.adults),
            children: parseInt(roomInfo.numOfChild) || parseInt(room.sleeps.children)
        }

        const newAddons = [];
        if (roomInfo.addons) {
            const roomAddons = JSON.parse(roomInfo.addons);
            if (Array.isArray(roomAddons)) {
                for (const roomAddon of roomAddons) {
                    const addon = await Addon.findById(roomAddon.addonId);
                    if (!addon) {
                        return new RecordNotFound("Addon not found", "Addon ID not found");
                    }
                    newAddons.push({
                        addon: roomAddon.addonId, isActive: true, amount: roomAddon.amount
                    });
                }
            }
        }

        let newFacilities = [];
        if (roomInfo.facilities) {
            const facilities = JSON.parse(roomInfo.facilities)
            if (Array.isArray(facilities)) {
                for (const facility of facilities) {
                    const popular = await Facility.findById(facility.toString());
                    if (!popular) {
                        return new RecordNotFound("Facility not found", "Facility with given ID not found");
                    }
                }
                newFacilities = facilities
            }
        }

        if (newAddons.length) room.addons = newAddons || room.addons;

        if (newFacilities.length) room.facilities = newFacilities || room.facilities;

        if (roomInfo.amenities) {
            room.amenities = JSON.parse(roomInfo.amenities);
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
        return await Room.find({hotel: hotelId});
    } catch (e) {
        throw e;
    }
}
const getRoomsByHotelIdWithDetails = async (hotelId) => {
    try {
        const rooms = await Room.find({hotel: hotelId}).populate('facilities').populate('addons.addon').exec();
        return rooms.map(room => {
            const roomObj = room.toObject();
            const possibleCombinations = getAllCombinations(roomObj.addons).filter(item => item.length);
            const combinations = [];
            possibleCombinations.forEach(combination => {
                let comb = {
                    totalAmount: room.roomPrice,
                    extraAmount: 0,
                    roomAmount: room.roomPrice,
                    combinationId: '',
                    roomId: room._id,
                    addons: [],
                }
                combinations.push(comb); // Adding room without any addons
                combination.forEach(addon => {
                    comb.combinationId = comb.combinationId + '__' + addon.addon._id;
                    comb.totalAmount = comb.totalAmount + addon.amount;
                    comb.extraAmount += addon.amount;
                    comb.addons.push({
                        id: addon.addon._id,
                        name: addon.addon.name,
                        amount: addon.amount,
                    });

                    comb.combinationId = comb.combinationId.slice(2)
                });
                combinations.push(comb);  // Adding room with addons
            });

            roomObj.roomCombinations = combinations;
            return roomObj;
        });
    } catch (e) {
        throw e;
    }
}

module.exports = {
    addRoom, getRooms, getRoomById, updateRoom, getRoomsByHotelId, getRoomsByHotelIdWithDetails,
}