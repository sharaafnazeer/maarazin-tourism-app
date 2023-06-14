import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateHotelRules } from "../../../../slices/hotelSlice";
import { useRouter } from "next/router";

const RulesTabContent = () => {
  const dispatch = useDispatch();

  const [rules, setRules] = useState({
    minAdvance: "",
    minStay: "",
    checkIn: "",
    checkOut: "",
  });

  const router = useRouter();
  const hotelId = router.query.id;

  const selectedHotel = useSelector((state) => state.hotel.selectedHotel);

  useEffect(() => {
  //  setRules()
  }, []);

  const onChange = (id, value) => {
    const newRules = { ...rules, [id]: value };
    setRules(newRules);
  };

  const onSave =()=>{
    dispatch(updateHotelRules(rules));
  
  }

  return (
    <div className="col-xl-9 col-lg-11">
      <div className="text-18 fw-500 mb-10 pt-30">
        Check in / Check out time
      </div>

      <div className="row x-gap-20 y-gap-20">
        <div className="col-md-6">
          <div className="form-input ">
            <input
              type="text"
              required
              id="minAdvance"
              defaultValue={
                selectedHotel && hotelId ? selectedHotel.rule.minAdvance : ""
              }
              onChange={(event) =>
                onChange(event.target.id, event.target.value)
              }
            />
            <label className="lh-1 text-16 text-light-1">
              Time for check in
            </label>
          </div>
        </div>
        {/* End col-6 */}
        <div className="col-md-6">
          <div className="form-input ">
            <input
              type="text"
              required
              id="minStay"
              defaultValue={selectedHotel && hotelId ? selectedHotel.rule.minStay : ""}
              onChange={(event) =>
                onChange(event.target.id, event.target.value)
              }
            />
            <label className="lh-1 text-16 text-light-1">
              Time for check out
            </label>
          </div>
        </div>
        {/* End col-6 */}
        <div className="col-md-6">
          <div className="form-input ">
            <input
              type="text"
              required
              id="checkIn"
              defaultValue={selectedHotel && hotelId ? selectedHotel.rule.checkIn : ""}
              onChange={(event) =>
                onChange(event.target.id, event.target.value)
              }
            />
            <label className="lh-1 text-16 text-light-1">
              Minimum advance reservations
            </label>
          </div>
        </div>
        {/* End col-6 */}
        <div className="col-md-6">
          <div className="form-input ">
            <input
              type="text"
              required
              id="checkOut"
              defaultValue={
                selectedHotel && hotelId ? selectedHotel.rule.checkOut : ""
              }
              onChange={(event) =>
                onChange(event.target.id, event.target.value)
              }
            />
            <label className="lh-1 text-16 text-light-1">
              Minimum day stay requirements
            </label>
          </div>
        </div>
        {/* End col-6 */}
      </div>
      {/* End row */}

      <div className="col-md-12 d-inline-block mt-30">
        <button
          type="submit"
          className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
          onClick={() => onSave()}
        >
          Save Changes <div className="icon-arrow-top-right ml-15" />
        </button>
      </div>
    </div>
  );
};

export default RulesTabContent;
