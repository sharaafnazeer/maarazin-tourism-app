import dynamic from "next/dynamic";
import { getOneReservation } from "../../../../slices/reservationSlice";
import { useDispatch, useSelector } from "react-redux";

const DetailsPopup = () => {
  const selectReservation = useSelector((state) => state.reservation.selectedReservation);
  return (
    <>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
            <div className="modal-content">  
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  {`${selectReservation?.customer?.firstName || ""} ${selectReservation?.customer?.lastName || ""} Personal Details`}
                </h1>
                <button
                  type="button"
                  className="btn-close text-danger"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="col-12">
                  <div className="order-completed-wrapper">
                    <div className="border-type-1 rounded-8 px-20 py-35 mt-40">
                      <div className="row x-gap-10 y-gap-20">
                        <div className="col-lg-4 col-md-6">
                          <div className="text-15 lh-12">Reference Number</div>
                          <div className="text-15 lh-12 fw-500 text-blue-1 mt-10">
                            {selectReservation?.refNumber}
                          </div>
                        </div>
                        {/* End .col */}
                        <div className="col-lg-4 col-md-6">
                          <div className="text-15 lh-12">Reservation Date</div>
                          <div className="text-15 lh-12 fw-500 text-blue-1 mt-10">
                            {selectReservation?.reservationDateTime}
                          </div>
                        </div>
                        {/* End .col */}
                        <div className="col-lg-4 col-md-6">
                          <div className="text-15 lh-12">Room Type</div>
                          <div className="text-15 lh-12 fw-500 text-blue-1 mt-10">
                            {selectReservation?.room?.name}
                          </div>
                        </div>
                        {/* End .col */} 
                        <div className="col-lg-4 col-md-6">
                          <div className="text-15 lh-12">Check In</div>
                          <div className="text-15 lh-12 fw-500 text-blue-1 mt-10">
                            {selectReservation?.arrivalDate}
                          </div>
                        </div>
                        {/* End .col */} 
                        <div className="col-lg-4 col-md-6">
                          <div className="text-15 lh-12">Check Out</div>
                          <div className="text-15 lh-12 fw-500 text-blue-1 mt-10">
                          {selectReservation?.departureDate}
                          </div>
                        </div>
                        {/* End .col */}
                      </div>
                    </div>

                    <div className="border-light rounded-8 px-20 py-40 mt-40">
                      <div className="row y-gap-10">
                        <div className="col-12">
                          <div className="d-flex justify-between ">
                            <div className="text-15 lh-16">Full name</div>
                            <div className="text-15 lh-16 fw-500 text-blue-1">
                              {selectReservation?.customer?.firstName}
                            </div>
                          </div>
                        </div>
                        {/* End .col */}
                        <div className="col-12">
                          <div className="d-flex justify-between border-top-light pt-10">
                            <div className="text-15 lh-16">Last name</div>
                            <div className="text-15 lh-16 fw-500 text-blue-1">
                            {selectReservation?.customer?.lastName}
                            </div>
                          </div>
                        </div>
                        {/* End .col */}
                        <div className="col-12">
                          <div className="d-flex justify-between border-top-light pt-10">
                            <div className="text-15 lh-16">Email</div>
                            <div className="text-15 lh-16 fw-500 text-blue-1">
                            {selectReservation?.customer?.email}
                            </div>
                          </div>
                        </div>
                        {/* End .col */}
                        <div className="col-12">
                          <div className="d-flex justify-between border-top-light pt-10">
                            <div className="text-15 lh-16">Phone</div>
                            <div className="text-15 lh-16 fw-500 text-blue-1">
                            {selectReservation?.customer?.phoneNumber}
                            </div>
                          </div>
                        </div>
                        {/* End .col */}
                        <div className="col-12">
                          <div className="d-flex justify-between border-top-light pt-10">
                            <div className="text-15 lh-16">Address line 1</div>
                            <div className="text-15 lh-16 fw-500 text-blue-1">
                            {selectReservation?.customer?.addressLine1}
                            </div>
                          </div>
                        </div>
                        {/* End .col */}
                        <div className="col-12">
                          <div className="d-flex justify-between border-top-light pt-10">
                            <div className="text-15 lh-16">Address line 2</div>
                            <div className="text-15 lh-16 fw-500 text-blue-1">
                            {selectReservation?.customer?.addressLine2}
                            </div>
                          </div>
                        </div>
                        {/* End .col */}
                        <div className="col-12">
                          <div className="d-flex justify-between border-top-light pt-10">
                            <div className="text-15 lh-16">City</div>
                            <div className="text-15 lh-16 fw-500 text-blue-1">
                            {selectReservation?.customer?.city}
                            </div>
                          </div>
                        </div>
                        {/* End .col */}
                        <div className="col-12">
                          <div className="d-flex justify-between border-top-light pt-10">
                            <div className="text-15 lh-16">
                              State/Province/Region
                            </div>
                            <div className="text-15 lh-16 fw-500 text-blue-1">
                            {selectReservation?.customer?.state}
                            </div>
                          </div>
                        </div>
                        {/* End .col */}
                        <div className="col-12">
                          <div className="d-flex justify-between border-top-light pt-10">
                            <div className="text-15 lh-16">Country</div>
                            <div className="text-15 lh-16 fw-500 text-blue-1">
                            {selectReservation?.customer?.country}
                            </div>
                          </div>
                        </div>
                        {/* End .col */}
                        <div className="col-12">
                          <div className="d-flex justify-between border-top-light pt-10">
                            <div className="text-15 lh-16">
                              ZIP code/Postal code
                            </div>
                            <div className="text-15 lh-16 fw-500 text-blue-1">
                            {selectReservation?.customer?.zipCode}
                            </div>
                          </div>
                        </div>
                        {/* End .col */}
                      </div>
                      {/* End .row */}
                    </div>
                    {/* End order information */}
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(DetailsPopup), { ssr: false });
