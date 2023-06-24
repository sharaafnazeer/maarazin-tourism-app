import Pagination from "../../common/Pagination";
import DetailsPopup from "./DetailsPopup";

const BookingTable = () => {

  return (
    <>
      <div className="tabs__content pt-30 js-tabs-content">
        <div className="tabs__pane -tab-item-1 is-tab-el-active">
          <div className="overflow-scroll scroll-bar-1">
            <table className="table-3 -border-bottom col-12">
              <thead className="bg-light-2">
                <tr>
                  <th># Reference No</th>
                  <th>Client Name</th>
                  <th>Reservation Date</th>
                  <th>Execution Date</th>
                  <th>Room Type</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#0001</td>
                  <td>Sharaf Sir</td>
                  <td>04/04/2022</td>
                  <td className="lh-16">
                    Check in : 05/14/2022
                    <br />
                    Check out : 05/29/2022
                  </td>
                  <td>VIP</td>
                  <td>
                      <DetailsPopup/>
                  </td>
                </tr>
                {/* End table row */}

                <tr>
                  <td>#0002</td>
                  <td>Matheen</td>
                  <td>04/04/2022</td>
                  <td className="lh-16">
                    Check in : 05/14/2022
                    <br />
                    Check out : 05/29/2022
                  </td>
                  <td>Delux</td>
                  <td>
                    <DetailsPopup/>
                  </td>
                </tr>
                {/* End table row */}


                <tr>
                  <td>#0003</td>
                  <td>Roy</td>
                  <td>04/04/2022</td>
                  <td className="lh-16">
                    Check in : 05/14/2022
                    <br />
                    Check out : 05/29/2022
                  </td>
                  <td>Standard</td>
                  <td>
                    <DetailsPopup/>
                  </td>
                </tr>
                {/* End table row */}

                <tr>
                  <td>#0004</td>
                  <td>Joy</td>
                  <td>04/04/2022</td>
                  <td className="lh-16">
                    Check in : 05/14/2022
                    <br />
                    Check out : 05/29/2022
                  </td>
                  <td>Standard</td>
                  <td>
                    <DetailsPopup/>
                  </td>
                </tr>

                {/* End table row */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Pagination />
    </>
  );
};

export default BookingTable;
