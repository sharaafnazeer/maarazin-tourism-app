import { useDispatch, useSelector } from "react-redux";
import Amenities from "./rooms/Amenities";
import RoomAddons from "./rooms/RoomAddons";
import RoomDetails from "./rooms/RoomDetails";
import RoomFacilities from "./rooms/RoomFacilities";
import RoomImgUploader from "./rooms/RoomImgUploader";
import RoomSleepSize from "./rooms/RoomSleepSize";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import { getAllRooms, saveRoom } from "../../../../slices/roomSlice";
import { getOneHotelRooms } from "../../../../slices/hotelSlice";

const RoomsTabcontent = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const hotelId = router.query.id;

  const selectedHotel = useSelector((state) => state.hotel.selectedHotel);
  const AllRooms = useSelector((state) => state.room.rooms);
  const selectedHotelRooms = useSelector(state => state.hotel.selectedHotelRooms);

  console.log(selectedHotelRooms);

  useEffect(()=>{
    dispatch(getOneHotelRooms(hotelId));
  },[])


  const [images, setImages] = useState([]);
  const [newAmentities, setNewAmentities] = useState({
    possible:"",
    numOfBeds: 0,
    amountPerNight:""
  });

  const [roomAddon, setRoomAddon] = useState({
    addonId :"",
    amount:""
  })
  // const [extraBed, setExtraBed] = useState(0);
  const [hotelRoom, setHotelRoom] = useState({
    hotelId: "",
    name: "",
    benefits: "",
    roomPrice: "",
    roomArea: "",
    adults: "",
    children: "",
    facilities: [],
    addons: [],
    amenities: [],
  });

  const onChange = (id, value) => {
    const newHotelRoom = { ...hotelRoom, [id]: value };
    setHotelRoom(newHotelRoom);
  };
  const onRoomSave = () => {
    let formData = new FormData();

    formData.append("hotelId", hotelId);
    formData.append("name", hotelRoom.name);
    formData.append("benefits", hotelRoom.benefits);
    formData.append("roomPrice", hotelRoom.roomPrice);
    formData.append("roomArea", hotelRoom.roomArea);
    formData.append("roomImages", images);
    formData.append("numOfAdults", hotelRoom.adults);
    formData.append("numOfChild", hotelRoom.children);
    formData.append("facilities", JSON.stringify(hotelRoom));
    formData.append("addons", JSON.stringify(roomAddon));
    formData.append("amenities", JSON.stringify(newAmentities));

    console.log(hotelRoom);

    // dispatch(saveRoom(formData))
    //   .unwrap()
    //   .then((res) => {
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  const onDelete =(id)=>{
    
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
              // defaultValue={(item && hotelId && item.hotel) ? item.name : ''}
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
                hotelId={hotelId}
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
                  // defaultValue={(item && hotelId && item.hotel) ? item.roomPrice : ''}
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
              hotelId={hotelId}
              newAmentities={newAmentities}
              setNewAmentities = {setNewAmentities}
            />
          </div>

          <div className="border-top-light mt-30 mb-30" />

          <div className="col-lg-12 mt-30">
            <div className="accordion -simple row y-gap-20 js-accordion">
              <RoomFacilities
                hotelRoom={hotelRoom}
                setHotelRoom={setHotelRoom}
                selectedHotel={selectedHotel}
                hotelId={hotelId}
                selectedHotelRooms={selectedHotelRooms}
              />
            </div>
          </div>
          {/* End RoomFacilities */}

          <div className="border-top-light mt-30 mb-30" />

          <div className="mt-30">
            <div className="fw-500 mb-20 text-18">Room addons</div>
            <RoomAddons hotelId={hotelId} roomAddon={roomAddon} setRoomAddon={setRoomAddon} />
          </div>
          {/* End RoomFacilities */}

          <div className="mt-40">
            <div className="row y-gap-20 d-flex justify-end items-end pb-60 lg:pb-40 md:pb-32">
              <div className="col-auto">
                <button className="button -md -blue-1 bg-blue-1-05 text-blue-1 h-50">
                  Clear
                </button>
              </div>
              {/* End .col-auto */}

              <div className="col-auto">
                <button
                  className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
                  onClick={() => onRoomSave()}
                >
                  Save Room <div className="icon-arrow-top-right ml-15" />
                </button>
              </div>
            </div>
            {/* End .row */}
          </div>

          <div>
            <RoomDetails />
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomsTabcontent;
