import { useState } from "react";


const AmentitiesBedOption = () => {
// for start bed code
const [activeBed, setActiveBed] = useState(0);

const handlebedClick = (bed) => {
  setActiveBed(bed);
};
  return (
    <>
         <div className="col-auto">
        <div className="relative js-form-dd">
          <button
            className="d-flex items-center px-15 py-5 lh-16 text-14 rounded-100 border-light -dd-button"
            data-bs-toggle="dropdown"
            data-bs-auto-close="true"
            aria-expanded="false"
            data-bs-offset="0,10"
          >
            {activeBed === 0 ? "Extra Beds" : activeBed + " Extra Beds"}
            {/* <i className="icon icon-chevron-sm-down text-7 ml-15" /> */}
          </button>

          <div className="dropbed dropdown-menu">
            <div className="px-20 py-20 rounded-4 bg-white border-light">
              <h5 className="text-18 fw-500 mb-10">Extra Beds</h5>
              <div className="row x-gap-10 y-gap-10 pt-10">
                {[1, 2, 3, 4].map((bed) => (
                  <div className="col-auto" key={bed}>
                    <button
                      className={`button -blue-1 bg-blue-1-05 text-blue-1 py-10 px-20 rounded-100 ${
                        activeBed === bed ? "active" : ""
                      }`}
                      onClick={() => handlebedClick(bed)}
                    >
                      {bed}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End .col-auto start beds */}
    </>
  )
}

export default AmentitiesBedOption;

