import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { updateHotelRule } from "../../../../slices/hotelSlice";
import { failureNofication, successNofication } from "../../../../data/notification";
import {useSession} from "next-auth/react";

const RulesTabContent = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const hotelId = router.query.id;

  const selectedHotel = useSelector((state) => state.hotel.selectedHotel);
  const session = useSession();

  const [rules, setRules] = useState({
    minAdvance: '',
    minStay: '',
    checkIn: '',
    checkOut: '',
  });


  const onChange = (id, value) => {
    const newRules = { ...rules, [id]: value };
    setRules(newRules);
  };

  const onSave = () => {

    let formData = new FormData();

    formData.append("minAdvance", rules.minAdvance);
    formData.append("minStay", rules.minStay);
    formData.append("checkIn", rules.checkIn);
    formData.append("checkOut", rules.checkOut);

    const data = {
      formData,
      hotelId,
      token: session?.data?.user?.accessToken
    }
    

    dispatch(updateHotelRule(data))
      .unwrap()
      .then((res) => {
        successNofication(res.message);
      })
      .catch((err) => {
        failureNofication(err.message);
      });
  };

  useEffect(() => {
    if (selectedHotel) {
      setRules(
        {
          minAdvance: selectedHotel?.rule?.minAdvance,
          minStay: selectedHotel?.rule?.minStay,
          checkIn: selectedHotel?.rule?.checkIn,
          checkOut: selectedHotel?.rule?.checkOut
        }
      )

    }
  }, [selectedHotel]);

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
              id="checkIn"
              defaultValue={
                (selectedHotel && hotelId) ? selectedHotel?.rule?.checkIn : ""
              }
              onChange={(event) =>
                onChange(event.target.id,event.target.value)
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
              id="checkOut"
              defaultValue={
               ( selectedHotel && hotelId) ? selectedHotel?.rule?.checkOut : ""
              }
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
              id="minAdvance"
              defaultValue={
                (selectedHotel && hotelId) ? selectedHotel?.rule?.minAdvance : ""
              }
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
              id="minStay"
              defaultValue={
                (selectedHotel && hotelId )? selectedHotel?.rule?.minStay : ""
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
