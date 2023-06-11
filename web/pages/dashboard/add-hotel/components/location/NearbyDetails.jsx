import React from "react";
import SearchAndNewNearby from "./SearchAndNewNearby";

const NearbyDetails = () => {
  return (
    <>
      <SearchAndNewNearby />
      {/*End Search Componnets */}

      <div className="tabs__content pt-30 js-tabs-content">
        <div className="tabs__pane -tab-item-1 is-tab-el-active">
          <div className="overflow-scroll scroll-bar-1">
            <table className="table-4 -border-bottom col-12">
              <thead className="bg-light-2">
                <tr>
                  <th>Name</th>
                  <th>Content</th>
                  <th>Distance</th>
                  <th>Action</th>
                </tr>
              </thead>
              {/* End theade */}
              <tbody>
                <tr>
                  <td>Name </td>
                  <td>Content </td>
                  <td>
                    <div className="rounded-4 p-2 bg-blue-1-05 text-blue-1 flex-center text-14 fw-600">
                     60 {`${"KM"}`}
                    </div>
                  </td>

                  <td>
                    <div className="row x-gap-10 y-gap-10 items-center">
                      <div className="col-auto">
                        <button className="flex-center bg-light-2 rounded-4 size-35">
                          <i className="icon-eye text-16 text-light-1" />
                        </button>
                      </div>
                      <div className="col-auto">
                        <button className="flex-center bg-light-2 rounded-4 size-35">
                          <i className="icon-edit text-16 text-light-1" />
                        </button>
                      </div>
                      <div className="col-auto">
                        <button className="flex-center bg-light-2 rounded-4 size-35">
                          <i className="icon-trash-2 text-16 text-light-1" />
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
                {/* End tr */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default NearbyDetails;
