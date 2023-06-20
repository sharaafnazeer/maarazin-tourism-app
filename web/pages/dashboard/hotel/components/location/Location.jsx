import { useEffect } from "react";

const Location = ({
  hotelId,
  selectedHotel,
  hotelLocation,
  setHotelLocation,
}) => {
  const onChange = (id, value) => {
    const changedHotelLocation = { ...hotelLocation, [id]: value };
    setHotelLocation(changedHotelLocation);
  };

  useEffect(() => {
    if (selectedHotel) {
      setHotelLocation(
        {
        city: selectedHotel?.location?.city,
        state: selectedHotel?.location?.state,
        country: selectedHotel?.location?.country,
        mapLatitude: selectedHotel?.location?.mapLatitude,
        mapLongitude: selectedHotel?.location?.mapLongitude,
        mapZoom: selectedHotel?.location?.mapZoom,
        }
      );
    }
  }, [selectedHotel]);

  return (
    <div className="row x-gap-20 y-gap-20">
      <div className="col-lg-4 col-md-6">
        <div className="form-input ">
          <input
            type="text"
            required
            id="city"
            defaultValue={(selectedHotel && hotelId) ? selectedHotel?.location?.city:""}
            onChange={(event) =>
                onChange(event.target.id, event.target.value)}
          />
          <label className="lh-1 text-16 text-light-1">City</label>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="form-input ">
          <input
            type="text"
            id="state"
            required
            defaultValue={(selectedHotel && hotelId) ? selectedHotel?.location?.state :" "}
            onChange={(event) =>
                onChange(event.target.id, event.target.value)}
          />
          <label className="lh-1 text-16 text-light-1">State</label>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="form-input ">
          <input
            type="text"
            id="country"
            required
            defaultValue={(selectedHotel && hotelId) ? selectedHotel?.location?.country :" "}
           onChange={(event) =>
                onChange(event.target.id, event.target.value)}
          />
          <label className="lh-1 text-16 text-light-1">Country</label>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="form-input ">
          <input
            type="text"
            id="mapLatitude"
            required
            defaultValue={(selectedHotel && hotelId) ? selectedHotel?.location?.mapLatitude :" "}
            onChange={(event) =>
                onChange(event.target.id, event.target.value)}
          />
          <label className="lh-1 text-16 text-light-1">Map Latitude</label>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="form-input ">
          <input
            type="text"
            id="mapLongitude"
            required
            defaultValue={(selectedHotel && hotelId) ? selectedHotel?.location?.mapLongitude :" "}
            onChange={(event) =>
                onChange(event.target.id, event.target.value)}
          />
          <label className="lh-1 text-16 text-light-1">Map Longitude</label>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="form-input ">
          <input
            type="text"
            id="mapZoom"
            required
            defaultValue={(selectedHotel && hotelId) ? selectedHotel?.location?.mapZoom :" "}
            onChange={(event) =>
                onChange(event.target.id, event.target.value)}
          />
          <label className="lh-1 text-16 text-light-1">Map Zoom</label>
        </div>
      </div>
    </div>
  );
};

export default Location;
