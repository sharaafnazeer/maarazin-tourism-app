import { useState } from "react";
import AmentitiesBedOption from "./AmentitiesBedOption";

const Amenities = ({hotelId,newAmentities, setNewAmentities}) => {

  const onChange =(id,value)=>{
    const Amentities ={...newAmentities,[id]: value};
    setNewAmentities(Amentities);
  }

  return (
    <>
      <div className="col-lg-8 border-light rounded-4">
        <div className="mt-20 px-20">
          <div className="fw-500 mb-10">Extra Bed Option</div>
          <p className="sectionTitle__text mt-5 sm:mt-0">
            Can you provide extra bed?
          </p>

          <div className="form-radio x-gap-20 y-gap-20">
            <div className="radio d-flex items-center">
              <input type="radio" name="rating" />
              <div className="radio__mark">
                <div className="radio__icon" />
              </div>
              <div className="ml-10">Yes</div>
            </div>

            <div className="radio d-flex items-center">
              <input type="radio" name="rating" />
              <div className="radio__mark">
                <div className="radio__icon" />
              </div>
              <div className="ml-10">No</div>
            </div>
          </div>

          <div className="mt-10">
            <div className="row mb-10">
              <div className="col-auto">
                <p className=" sectionTitle__text sm:mt-0">
                  Select the number of extra beds that can be added.
                </p>
              </div>
              <div className="col-auto">
                <AmentitiesBedOption newAmentities={newAmentities} setNewAmentities={setNewAmentities}/>
              </div>
            </div>
          </div>
          {/* End Amentities Bed Option */}

          <div className="mt-30">
            <div className="row mb-10">
              <div className="col-auto">
                <p className=" sectionTitle__text pt-20">
                  Enter the price per night, per bed
                </p>
              </div>
              <div className="col">
                <div className="col-lg-6">
                  <div className="form-input ">
                    <input type="number" required 
                      id="amountPerNight"
                      onChange={(event)=> onChange(event.target.id, event.target.value)}
                    />
                    <label className="lh-1 text-16 text-light-1">{`US$`} 0.00</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Amenities;
