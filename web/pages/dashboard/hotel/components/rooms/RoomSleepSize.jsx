import { useSelector } from "react-redux";

const RoomSleepSize = ({ hotelRoom, setHotelRoom, hotelId }) => {
 
  const onChange = (id, value) => {
    const newHotelRoom = { ...hotelRoom, [id]: value };
    setHotelRoom(newHotelRoom);
  };

  
  return (
    <div className="row x-gap-20 y-gap-20">
      <div className="col-sm-4">
        <div className="form-input ">
          <input
            type="number"
            required
            id="adults"
            // defaultValue={
            //   item && hotelId && item.hotel ? item.sleeps.adults : ""
            // }
            onChange={(evt) => onChange(evt.target.id, evt.target.value)}
          />
          <label className="lh-1 text-16 text-light-1">Adults</label>
        </div>
      </div>
      {/* End Adults */}

      <div className="col-sm-4">
        <div className="form-input ">
          <input
            type="number"
            required
            id="children"
            // defaultValue={
            //   item && hotelId && item.hotel ? item.sleeps.children : ""
            // }
            onChange={(evt) => onChange(evt.target.id, evt.target.value)}
          />
          <label className="lh-1 text-16 text-light-1">Childs</label>
        </div>
      </div>
      {/* End Childs */}

      <div className="col-sm-10">
        <div className="form-input ">
          <textarea
            required
            rows={5}
            id="benefits"
            // defaultValue={item && hotelId && item.hotel ? item.benefits : ""}
            onChange={(evt) => onChange(evt.target.id, evt.target.value)}
          />
          <label className="lh-1 text-16 text-light-1">Benefits</label>
        </div>
      </div>
      {/* End Benifits */}
    </div>
  );
};

export default RoomSleepSize;
