import Image from "next/Image";
import Faq from "../../../../../components/faq/Faq";
const RoomFacilities = () => {
  const Facilities = [
    {
      id: 1,
      label: "Non-smoking rooms",
    },
    {
      id: 2,
      label: "Parking Area",
    },
    {
      id: 3,
      label: "Free WiFi",
    },
    {
      id: 4,
      label: "Kitchen",
    },
    {
      id: 5,
      label: "Gym",
    },
    {
      id: 6,
      label: "Spa",
    },
    {
      id: 7,
      label: "Restaurant",
    },
  ];

  return (
    <>
      {/* <div className="tabs__content pt-30 js-tabs-content"> */}
        <div className="tabs__pane -tab-item-1 is-tab-el-active">
          <div className="overflow-scroll scroll-bar-1">
            <table className="table-4 -border-bottom col-12">
              <thead className="bg-light-2">
                <tr>
                  <th>Bath Room</th>
                  <th>Most Popular</th>
                  <th>Have Extra Fee</th>
                  <th>Amount</th>
                  {/* <th>Amount</th> */}
                </tr>
              </thead>
              {/* End theade */}
              <tbody>
                <tr>
                  <td>
                    <div className="col-12">
                      <div className="d-flex items-center form-checkbox">
                        <input type="checkbox" name="name" />
                        <div className="form-checkbox__mark">
                          <div className="form-checkbox__icon icon-check" />
                        </div>
                        <div className="text-15 lh-11 ml-10">Label</div>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className="d-flex align-items-center form-checkbox">
                      <input type="checkbox" name="name" />
                      <div className="form-checkbox__mark">
                        <div className="form-checkbox__icon icon-check" />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex justify-content-center form-checkbox">
                      <input type="checkbox" name="name" />
                      <div className="form-checkbox__mark">
                        <div className="form-checkbox__icon icon-check" />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="form-input ">
                      <input type="number" required />
                      <label className="lh-1 text-16 text-light-1">
                        Amount USD($)
                      </label>
                    </div>
                  </td>
                  
                </tr>
                {/* End tr */}

                <tr>
                  <td>
                    <div className="col-12">
                      <div className="d-flex items-center form-checkbox">
                        <input type="checkbox" name="name" />
                        <div className="form-checkbox__mark">
                          <div className="form-checkbox__icon icon-check" />
                        </div>
                        <div className="text-15 lh-11 ml-10">Label</div>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className="d-flex align-items-center form-checkbox">
                      <input type="checkbox" name="name" />
                      <div className="form-checkbox__mark">
                        <div className="form-checkbox__icon icon-check" />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex justify-content-center form-checkbox">
                      <input type="checkbox" name="name" />
                      <div className="form-checkbox__mark">
                        <div className="form-checkbox__icon icon-check" />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="form-input ">
                      <input type="number" required />
                      <label className="lh-1 text-16 text-light-1">
                        Amount USD($)
                      </label>
                    </div>
                  </td>
                  
                </tr>
                {/* End tr */}
              
              </tbody>
            </table>
          </div>
        </div>
      {/* </div> */}
      <div className="col-lg-12">
                <div className="accordion -simple row y-gap-20 js-accordion">
                 <Faq/>
                </div>
              </div>
              {/* End .col */}
    </>
  );
};

export default RoomFacilities;
