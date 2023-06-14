import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const Checkbox = ({
  label,
  checkHandler,
  index,
  selectedHotel,
  hotelId,
}) => {
  // let number = 0
  // for(var i=0; i<selectedHotel.popularFacilities.length; i++)
  // console.log(selectedHotel.popularFacilities[i]);

  
  return (
    <div className="col-lg-12">
      <div className="d-flex items-center form-checkbox">
        <input
          type="checkbox"
          name="popularFacilities"
          id={index}
          onChange={(event) => checkHandler(index, event.target.checked)}
          defaultValue={(selectedHotel && hotelId)? selectedHotel.popularFacilities[1] :'' }
        />
        <div className="form-checkbox__mark">
          <div className="form-checkbox__icon icon-check" />
        </div>
        <div className="text-15 lh-11 ml-10">{label}</div>
      </div>
    </div>
  );
};

const RoomMostP_Facilities = ({
  hotelData,
  setHotelData,
  hotelId,
  selectedHotel,
}) => {


  
  const popularFacilities = useSelector(
    (state) => state.hotel.mostPopularFacilities
  );
  

  // console.log(selectedHotel.popularFacilities[0] );

  const updateCheckStatus = (id, checked) => {
    const newHotelData = {
      ...hotelData,
    };

    if (checked) {
      if (!newHotelData.popularFacilities.includes(id)) {
        newHotelData.popularFacilities.push(id);
      }
    } else {
      if (newHotelData.popularFacilities.includes(id)) {
        newHotelData.popularFacilities = newHotelData.popularFacilities.filter(
          (item) => item !== id
        );
      }
    }
    setHotelData(newHotelData);
  };

  return (
    <div className="col-lg-12  mt-10">
      <div className="row x-gap-100 y-gap-15">
        {popularFacilities.map((active, index) => (
          <div className="col-lg-4 col-sm-6">
            <div className="row y-gap-15">
              <Checkbox
                key={active._id}
                checkHandler={updateCheckStatus}
                label={active.name}
                index={active._id}
                selectedHotel={selectedHotel}
                hotelId={hotelId}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomMostP_Facilities;
