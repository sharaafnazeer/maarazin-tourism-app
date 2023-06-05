import SearchAndNewRoom from "./SearchAndNewRoom";
import Image from "next/Image";

const RoomDetails = () => {
  return (
    <>
      <SearchAndNewRoom />
      <div className="tabs__content pt-30 js-tabs-content">
        <div className="tabs__pane -tab-item-1 is-tab-el-active">
          <div className="overflow-scroll scroll-bar-1">
            <table className="table-4 -border-bottom col-12">
              <thead className="bg-light-2">
                <tr>
                  <th>Room Type</th>
                  <th>Members</th>
                  <th>Benifits</th>
                  <th>Facilities</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              {/* End theade */}
              <tbody>
                <tr>
                  <td>
                    <div className="col">
                      <div className="row-auto">
                        <div className="text-blue-1 fw-500">DELUXE</div>
                      </div>
                      <div className="d-flex ratio ratio-1:1 w-200">
                        <Image
                          width={200}
                          height={200}
                          src="/img/hotels/1.png"
                          alt="avatar"
                          className="img-ratio rounded-4"
                        />
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className="col ">
                      <div className="row-auto mb-2">02 Adult</div>
                      <div className="row-auto">10 child</div>
                    </div>
                  </td>

                  <td>harum ipsam, cum enim quibusdam, quas quam quidem magnam maiores officia quo necessitatibus animi ipsa atque pariatur? Quaerat, neque?</td>

                  <td>
                    <div className="col">
                      <div className="row mb-2">Parking area</div>
                      <div className="row">Free Wifi</div>
                    </div>
                  </td>

                  <td>
                    <div className="rounded-4 p-2 bg-blue-1-05 text-blue-1 flex-center text-14 fw-600">
                      US$.3000
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

export default RoomDetails;
