import { useEffect } from "react";
import Facilities from "../../../../../data/roomFacilities";
import { useDispatch, useSelector } from "react-redux";
import { getAllFacilities } from "../../../../../slices/hotelSlice";
import { useState } from "react";

const RoomFacilities = ({
  selectedHotel,
  hotelId,
  hotelRoom,
  setHotelRoom,
  selectedHotelRooms,
}) => {
  const dispatch = useDispatch();
  const Facilities = useSelector((state) => state.hotel.allFacilities);

  

  useEffect(() => {
    dispatch(getAllFacilities());
  }, []);

  const updateCheckStatus = (id, checked) => {
    const newFacility = { ...hotelRoom };

    // console.log(newFacility.Facilities);
    //
    if (checked) {
      if (!newFacility.facilities.includes(id)) {
        let all = newFacility.facilities;
        all = [...all, id];

        newFacility.facilities = all;
      }
    } else {
      if (newFacility.facilities.includes(id)) {
        newFacility.facilities = newFacility.facilities.filter(
          (item) => item !== id
        );
      }
    }
    setHotelRoom(newFacility);
  };

  return (
    <>
      {Facilities.map((item, index) => (
        <div className="col-12" key={item._id}>
          <div className="accordion__item px-20 py-20 border-light rounded-4 bg-light-2">
            <div
              className="accordion__button d-flex items-center mb-20 justify-content-between"
              data-bs-toggle="collapse"
              data-bs-target={`#item-${index}`}
            >
              <div className="button text-dark-1 text-start">{item.name}</div>
              <div className="accordion__icon size-40 flex-center bg-light-2 rounded-full mr-20">
                <i className="icon-plus" />
                <i className="icon-minus" />
              </div>
            </div>
            {/* End accordion button */}

            <div
              className="accordion-collapse collapse"
              id={`item-${index}`}
            >
              <div className="col-lg-12 bg-light">
                <div className="row x-gap-100 y-gap-15">
                  {item?.facilities?.map((content, index) => (
                    <div className="col-lg-4 col-sm-6" key={content._id}>
                      <div className="row y-gap-15">
                        <div className="col-12">
                          <div className="d-flex items-center form-checkbox">
                            <input
                              type="checkbox"
                              name="facilities"
                              onChange={(event) =>
                                updateCheckStatus(content._id, event.target.checked)
                              }
                              // defaultChecked={selectedHotelRooms && selectedHotelRooms.facilities.includes(content._id)}
                              // defaultValue={selectedHotelRooms && selectedHotelRooms}
                            />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check" />
                            </div>
                            <div className="text-15 lh-11 ml-10">
                              {content.name}
                            </div>
                          </div>
                        </div>
                        {/* End .col-12 */}
                      </div>
                      {/* End accordion conent */}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* End accordion conent */}
          </div>
        </div>
      ))}
    </>
  );
};

export default RoomFacilities;
