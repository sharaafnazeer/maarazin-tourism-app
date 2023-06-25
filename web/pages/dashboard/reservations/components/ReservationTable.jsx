import { useRouter } from "next/router";
import Pagination from "../../common/Pagination";
import DetailsPopup from "./DetailsPopup";
import ActionsButton from "./ActionsButton";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllReservations, getOneReservation, updateReservationAction } from "../../../../slices/reservationSlice";

const ReservationTable = ({ allReservations, selectReservation }) => {
  const dispatch = useDispatch();
  const [confirmAction, setConfirmAction] = useState(1);

  const onDetailClick = (reservationId) => {

    dispatch(getOneReservation(reservationId));
  };

  const onConfirmClick = (reservationId) => {
    if(reservationId){

      const data = {
        reservationId,
        status: 1
      }
      dispatch(updateReservationAction(data))
      .unwrap()
      .then((res) => {
        dispatch(getAllReservations());
      }).catch((err) => console.log(err));
    }
    
  };

  const onRejectClick = (reservationId) => {
    if(reservationId){

      const data = {
        reservationId,
        status: 2
      }
      dispatch(updateReservationAction(data))
      .unwrap()
      .then((res) => {
        dispatch(getAllReservations());
      }).catch((err) => console.log(err));
    }
  };

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
                {allReservations?.map((reservation) => (
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
                    <td>
                      {
                        reservation.status === 0 && (
                          <span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-blue-1-05 text-blue-1">
                              Pending
                          </span>
                        )
                      }
                      {
                        reservation.status === 1 && (
                          <span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-blue-1-05 text-blue-1">
                              Confirmed
                          </span>
                        )
                      }
                      {
                        reservation.status === 2 && (
                          <span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-red-3 text-red-2">
                            Rejected
                          </span>
                        )
                      }
                      {
                        reservation.status === 3 && (
                          <span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-blue-1-05 text-blue-1">
                              Cancelled
                          </span>
                        )
                      }
                    </td>
                    <td>
                      <ActionsButton
                        onDetailClick={onDetailClick}
                        onConfirmClick={onConfirmClick}
                        onRejectClick={onRejectClick}
                        record={reservation}
                      />
                    </td>
                  </tr>
                ))}
                {/* End table row */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <DetailsPopup/>
      <Pagination />
    </>
  );
};

export default ReservationTable;
