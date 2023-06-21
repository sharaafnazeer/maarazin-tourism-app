import {useDispatch, useSelector} from "react-redux";
import Amenities from "./rooms/Amenities";
import RoomAddons from "./rooms/RoomAddons";
import RoomDetails from "./rooms/RoomDetails";
import RoomFacilities from "./rooms/RoomFacilities";
import RoomImgUploader from "./rooms/RoomImgUploader";
import RoomSleepSize from "./rooms/RoomSleepSize";
import {useEffect} from "react";
import {useRouter} from "next/router";
import {useState} from "react";
import {
    deleteSelectedRoom,
    getAllRooms,
    getSelectedRoom,
    saveRoom,
    updateRoom,
    updateRooms, updateSelectedRoom
} from "../../../../slices/roomSlice";
import {getOneHotelRooms} from "../../../../slices/hotelSlice";

const RoomsTabcontent = () => {

    const dispatch = useDispatch();
    const router = useRouter();
    const hotelId = router.query.id;

    const selectedRoom = useSelector((state) => state.room.selectedRoom);
    const selectedHotelRooms = useSelector(state => state.hotel.selectedHotelRooms);
 

    useEffect(() => {
        dispatch(getOneHotelRooms(hotelId));
    }, [hotelId])

    const [images, setImages] = useState([]);

    const [addons, setAddons] = useState([]);
    const [facilities, setFacilities] = useState([]);
    const [amenities, setAmenities] = useState({
            extraBed: {
                amountPerNight: 0,
                numOfBeds: 0,
                possible: false
            }
        })
    ;

    const [hotelRoom, setHotelRoom] = useState({
        hotelId: "",
        name: "",
        benefits: "",
        roomPrice: "",
        roomArea: "",
        adults: "",
        children: "",
    });

    useEffect(() => {
        if (selectedRoom && selectedRoom._id) {
            setHotelRoom({
                hotelId: hotelId,
                roomId: selectedRoom._id,
                name: selectedRoom.name,
                benefits: selectedRoom.benefits,
                roomPrice: selectedRoom.roomPrice,
                roomArea: selectedRoom.roomArea,
                adults: selectedRoom.sleeps?.adults || "",
                children: selectedRoom.sleeps?.children || "",
                existingRoomImages: selectedRoom.roomImages
            });

            setAmenities(selectedRoom.amenities)

            setFacilities(selectedRoom.facilities);

            const newAddons = selectedRoom.addons.map((addon) => {
                return {
                    amount: addon.amount,
                    addonId: addon.addon
                }
            })
            setAddons(newAddons);
        } else {
            setHotelRoom({
                hotelId: "",
                name: "",
                benefits: "",
                roomPrice: "",
                roomArea: "",
                adults: "",
                children: "",
            });

            setAmenities(
                {
                    extraBed: {
                        amountPerNight: 0,
                        numOfBeds: 0,
                        possible: false
                    }
                }
            )

            setFacilities([]);
            setAddons([]);
        }
    }, [selectedRoom, selectedRoom?._id]);
    
    const onChange = (id, value) => {
        const newHotelRoom = {...hotelRoom, [id]: value};
        setHotelRoom(newHotelRoom);
    };
    const onRoomSave = () => {
        let formData = new FormData();

        formData.append("hotelId", hotelId);
        formData.append("name", hotelRoom.name);
        formData.append("benefits", hotelRoom.benefits);
        formData.append("roomPrice", hotelRoom.roomPrice);
        formData.append("roomArea", hotelRoom.roomArea);
        formData.append("numOfAdults", hotelRoom.adults);
        formData.append("numOfChild", hotelRoom.children);
        formData.append("facilities", JSON.stringify(facilities));
        formData.append("addons", JSON.stringify(addons));
        formData.append("amenities", JSON.stringify(amenities));

        images.forEach((image) => {
            formData.append("roomImages", image);
        });

        if (selectedRoom) {

            formData.append("existingRoomImages", JSON.stringify(hotelRoom.existingRoomImages));

            const data = {
                formData,
                roomId: selectedRoom._id
            }
            dispatch(updateRoom(data))
                .unwrap()
                .then((res) => {
                    dispatch(getOneHotelRooms(hotelId));
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            dispatch(saveRoom(formData))
                .unwrap()
                .then((res) => {
                    dispatch(getOneHotelRooms(hotelId));
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    const onDelete = (id) => {
        dispatch(deleteSelectedRoom(id))
            .unwrap()
            .then(res => {
                dispatch(getOneHotelRooms(hotelId));
            });
    }

    const onEdit = (id) => {
        dispatch(getSelectedRoom(id));
    }

    const onRoomClear = () => {
        dispatch(updateSelectedRoom(null));
    }

    return (
        <>
            <div className="row x-gap-20 y-gap-20">
                <div className="col-12">
                    <div className="text-18 fw-500 mb-10">Available Rooms</div>
                    <div className="form-input col-10">
                        <input
                            type="text"
                            required
                            id="name"
                            defaultValue={(hotelRoom && hotelId) ? hotelRoom.name : ''}
                            onChange={(evt) => onChange(evt.target.id, evt.target.value)}
                        />
                        <label className="lh-1 text-16 text-light-1">Room Type Name</label>
                    </div>

                    {/* End BannerUploader */}

                    <div className="mt-30">
                        <div className="fw-500">Room Image</div>
                        <RoomImgUploader
                            hotelRoom={hotelRoom}
                            setHotelRoom={setHotelRoom}
                            images={images}
                            setImages={setImages}
                            hotelId={hotelId}
                        />
                    </div>
                    {/* End RoomImageUploader */}

                    <div className="mt-30">
                        <div className="fw-500 mb-10 text-18">Room Sleep Size</div>
                        <div className="accordion -simple row y-gap-20 js-accordion">
                            {/* <Faq /> */}
                            <RoomSleepSize
                                hotelRoom={hotelRoom}
                                setHotelRoom={setHotelRoom}
                            />
                        </div>
                    </div>
                    {/* End RoomSleepSize */}

                    <div className="mt-30">
                        <div className="fw-500 mb-10">Pricing</div>
                        <div className="col-lg-4">
                            <div className="form-input ">
                                <input
                                    type="number"
                                    required
                                    id="roomPrice"
                                    defaultValue={(hotelRoom && hotelId) ? hotelRoom.roomPrice : ''}
                                    onChange={(evt) => onChange(evt.target.id, evt.target.value)}
                                />
                                <label className="lh-1 text-16 text-light-1">Room Price</label>
                            </div>
                        </div>
                    </div>
                    {/* End Pricing */}

                    <div className="mt-30">
                        <div className="fw-500 mb-10 text-18">Amenities</div>
                        <Amenities
                            amenities={amenities}
                            setAmenities={setAmenities}
                            selectedRoom={selectedRoom}
                        />
                    </div>

                    <div className="border-top-light mt-30 mb-30"/>

                    <div className="col-lg-12 mt-30">
                        <div className="accordion -simple row y-gap-20 js-accordion">
                            <RoomFacilities
                                facilities={facilities}
                                setFacilities={setFacilities}
                            />
                        </div>
                    </div>
                    {/* End RoomFacilities */}

                    <div className="border-top-light mt-30 mb-30"/>

                    <div className="mt-30">
                        <div className="fw-500 mb-20 text-18">Room addons</div>
                        <RoomAddons addons={addons} setAddons={setAddons}/>
                    </div>
                    {/* End RoomFacilities */}

                    <div className="mt-40">
                        <div className="row y-gap-20 d-flex justify-end items-end pb-60 lg:pb-40 md:pb-32">
                            <div className="col-auto">
                                <button className="button -md -blue-1 bg-blue-1-05 text-blue-1 h-50"
                                        onClick={() => onRoomClear()}
                                >
                                    Clear
                                </button>
                            </div>
                            {/* End .col-auto */}

                            <div className="col-auto">
                                <button
                                    className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
                                    onClick={() => onRoomSave()}
                                >
                                    Save Room <div className="icon-arrow-top-right ml-15"/>
                                </button>
                            </div>
                        </div>
                        {/* End .row */}
                    </div>

                    <div>
                        <RoomDetails rooms={selectedHotelRooms} onEdit={onEdit} onDelete={onDelete}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RoomsTabcontent;
