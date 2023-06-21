import { useDispatch, useSelector } from "react-redux";
import Location from "./location/Location";
import Nearby from "./location/Nearby";
import NearbyDetails from "./location/NearbyDetails";
import { useRouter } from "next/router";
import { useState } from "react";
import { updateHotelLocation } from "../../../../slices/hotelSlice";
import { useEffect } from "react";

const LocationTabContent = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const hotelId = router.query.id;

  const selectedHotel = useSelector((state) => state.hotel.selectedHotel);

  const [hotelLocation, setHotelLocation] = useState({
    city: "",
    state: "",
    country: "",
    mapLatitude: "",
    mapLongitude: "",
    mapZoom: "",
  });
  const [nearBy, setNearBy] = useState([]);
  const [selectedNearBy, setSelectedNearBy] = useState(null);

  const onLocationSave = () => {
    let formData = new FormData();

    formData.append("location", JSON.stringify(hotelLocation));
    formData.append("nearBy", JSON.stringify(nearBy));

    const data = {
      formData,
      hotelId,
    };

    dispatch(updateHotelLocation(data))
      .unwrap()
      .then((result) => {})
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (selectedHotel && selectedHotel.nearBy) {
      setNearBy(selectedHotel.nearBy);
    }
  }, [selectedHotel?.nearBy]);

  // console.log(nearBy);
  const onNearByEdit = (i) => {
    setSelectedNearBy(nearBy.find((item, index) => index === i));
  };

  const onDeleteNearBy = (i) => {
    setNearBy(nearBy.filter((item, index) => index !== i));
  };

  return (
    <div className="col-xl-10">
      <div className="text-18 fw-500 mb-10">Location</div>
      <Location
        hotelId={hotelId}
        selectedHotel={selectedHotel}
        hotelLocation={hotelLocation}
        setHotelLocation={setHotelLocation}
      />

      <div className="mt-30">
        <div className="fw-500 mb-20">Nearby</div>
        <Nearby
          hotelId={hotelId}
          selectedNearBy={selectedNearBy}
          nearBy={nearBy}
          setNearBy={setNearBy}
        />
      </div>
      <div>
        <NearbyDetails
          hotelId={hotelId}
          nearBy={nearBy}
          onEdit={onNearByEdit}
          onDelete={onDeleteNearBy}
        />
      </div>
      <div className="col-md-12 d-inline-block mt-30">
        <button
          type="submit"
          className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
          onClick={() => onLocationSave()}
        >
          Save Changes <div className="icon-arrow-top-right ml-15" />
        </button>
      </div>
    </div>
  );
};

export default LocationTabContent;
