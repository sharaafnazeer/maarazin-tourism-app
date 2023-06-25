import { useRouter } from "next/router";
import Pagination from "../../common/Pagination";
import DetailsPopup from "./DetailsPopup";

const ReservationTable = ({allReservations}) => {
  
 

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
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {allReservations?.map((reservation)=>(
                <tr key={reservation._id}>
                  <td>{reservation?.refNumber}</td>
                  <td>{reservation?.customer?.fullName}</td>
                  <td>{reservation?.reservationDateTime}</td>
                  <td className="lh-16">
                    {`Check in : ${reservation?.arrivalDate}`}
                    <br />
                    {`Check out : ${reservation?.departureDate}`}
                  </td>
                  <td>{reservation?.room?.name}</td>
                  <td>Status</td>
                  <td>
                      <DetailsPopup reservationId={reservation._id}/>
                  </td>
                </tr>
                ))}
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

export default ReservationTable;
