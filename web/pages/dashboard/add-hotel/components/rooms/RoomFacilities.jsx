import Image from "next/Image";

import Facilities from "../../../../../data/roomFacilities";

const RoomFacilities = () => {
 

  return (
    <>
      {Facilities.map((item) => (
        <div className="col-12" key={item.id}>
          <div className="accordion__item px-20 py-20 border-light rounded-4 bg-light-2">
            <div
              className="accordion__button d-flex items-center mb-20 justify-content-between"
              data-bs-toggle="collapse"
              data-bs-target={`#${item.collapseTarget}`}
            >
              <div className="button text-dark-1 text-start">{item.title}</div>
              <div className="accordion__icon size-40 flex-center bg-light-2 rounded-full mr-20">
                <i className="icon-plus" />
                <i className="icon-minus" />
              </div>
            </div>
            {/* End accordion button */}

            <div
              className="accordion-collapse collapse"
              id={item.collapseTarget}
              // data-bs-parent="#Faq1"
            >
               <div className="col-lg-12 bg-light">
                <div className="row x-gap-100 y-gap-15">
                  {item?.contents?.map((content)=>(
                  <div className="col-lg-4 col-sm-6" key={content.id}>
                    <div className="row y-gap-15">
                      <div className="col-12">
                        <div className="d-flex items-center form-checkbox">
                          <input type="checkbox" name="name" />
                          <div className="form-checkbox__mark">
                            <div className="form-checkbox__icon icon-check" />
                          </div>
                          <div className="text-15 lh-11 ml-10">{content.label}</div>
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
