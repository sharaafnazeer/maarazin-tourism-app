import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRoomMostP_Facilities } from "../../../slices/hotelSlice";

const popularFilters = () => {
  const dispatch = useDispatch();
  let [facilities, setFacilities] = useState([]);

  const popularFacilities = useSelector(
    (state) => state.hotel.mostPopularFacilities
  );

  useEffect(() => {
    dispatch(getRoomMostP_Facilities());
  }, []);

  const updateCheckStatus = (id, checked) => {
    if (checked) {
      if (!facilities.includes(id)) {
        let all = facilities;
        all = [...all, id];

        facilities = all;
        console.log(facilities);
      } else {
        if (facilities.includes(id)) {
          facilities = facilities.filter((item) => item !== id);
        }
      }
    }
    setFacilities(facilities);
  };

  return (
    <>
      {popularFacilities.map((filter, index) => (
        <div key={index} className="row y-gap-10 items-center justify-between">
          <div className="col-auto">
            <div className="form-checkbox d-flex items-center">
              <input
                type="checkbox"
                name="facilities"
                onChange={(event) =>
                  updateCheckStatus(filter._id, event.target.checked)
                }
                checked={facilities.includes(filter._id)}
              />
              <div className="form-checkbox__mark">
                <div className="form-checkbox__icon icon-check" />
              </div>
              <div className="text-15 ml-10">{filter?.name}</div>
            </div>
          </div>
          {/* <div className="col-auto">
            <div className="text-15 text-light-1">{filter?.count}</div>
          </div> */}
        </div>
      ))}
    </>
  );
};

export default popularFilters;
