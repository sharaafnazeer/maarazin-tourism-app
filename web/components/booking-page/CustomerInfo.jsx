import BookingDetails from "./sidebar/BookingDetails";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { updateReservationDetails } from "../../slices/reservationSlice";

const CustomerInfo = () => {
  const reservationData = useSelector((state) => state.reservation);
  const dispatch = useDispatch();
  const [customerInfo, setCustomerInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    addressLine1: "",
    addressLine2: "",
    city:"",
    state: "",
    country:"",
    zipCode: "",
    specialRequests: "",
  });

  const onChange = (id, value) => {
    const newCustomerInfo = { ...customerInfo, [id]: value };
    setCustomerInfo(newCustomerInfo);

    const data = {
      ...reservationData,
      reservationDetails: {
        ...reservationData.reservationDetails,
        reservationCustomerDetails: newCustomerInfo
      },
    };
    dispatch(updateReservationDetails(data));
  };
  return (
    <>
      <div className="col-xl-7 col-lg-8 mt-30">
        {/*<div className="py-15 px-20 rounded-4 text-15 bg-blue-1-05">*/}
        {/*    Sign in to book with your saved details or{" "}*/}
        {/*    <Link href="/others-pages/signup" className="text-blue-1 fw-500">*/}
        {/*        register*/}
        {/*    </Link>{" "}*/}
        {/*    to manage your bookings on the go!*/}
        {/*</div>*/}
        {/* End register notify */}

        <h2 className="text-22 fw-500 mt-40 md:mt-24">
          Let us know who you are
        </h2>

        <div className="row x-gap-20 y-gap-20 pt-20">
          <div className="col-md-6">
            <div className="form-input ">
              <input
                type="text"
                required
                id="firstName"
                value={customerInfo.firstName}
                onChange={(event) =>
                  onChange(event.target.id, event.target.value)
                }
              />
              <label className="lh-1 text-16 text-light-1">First Name</label>
            </div>
          </div>
          {/* End col-12 */}
          <div className="col-md-6">
            <div className="form-input ">
              <input
                type="text"
                required
                id="lastName"
                value={customerInfo.lastName}
                onChange={(event) =>
                  onChange(event.target.id, event.target.value)
                }
              />
              <label className="lh-1 text-16 text-light-1">Last Name</label>
            </div>
          </div>
          {/* End col-12 */}

          <div className="col-md-6">
            <div className="form-input ">
              <input
                type="text"
                required
                id="email"
                value={customerInfo.email}
                onChange={(event) =>
                  onChange(event.target.id, event.target.value)
                }
              />
              <label className="lh-1 text-16 text-light-1">Email</label>
            </div>
          </div>
          {/* End col-12 */}

          <div className="col-md-6">
            <div className="form-input ">
              <input
                type="text"
                required
                id="phoneNumber"
                value={customerInfo.phoneNumber}
                onChange={(event) =>
                  onChange(event.target.id, event.target.value)
                }
              />
              <label className="lh-1 text-16 text-light-1">Phone Number</label>
            </div>
          </div>
          {/* End col-12 */}

          <div className="col-12">
            <div className="form-input ">
              <input
                type="text"
                required
                id="addressLine1"
                value={customerInfo.addressLine1}
                onChange={(event) =>
                  onChange(event.target.id, event.target.value)
                }
              />
              <label className="lh-1 text-16 text-light-1">
                Address line 1
              </label>
            </div>
          </div>
          {/* End col-12 */}

          <div className="col-12">
            <div className="form-input ">
              <input
                type="text"
                required
                id="addressLine2"
                value={customerInfo.addressLine2}
                onChange={(event) =>
                  onChange(event.target.id, event.target.value)
                }
              />
              <label className="lh-1 text-16 text-light-1">
                Address line 2
              </label>
            </div>
          </div>
          {/* End col-12 */}

          <div className="col-md-6">
            <div className="form-input ">
              <input
                type="text"
                required
                id="city"
                value={customerInfo.city}
                onChange={(event) =>
                  onChange(event.target.id, event.target.value)
                }
              />
              <label className="lh-1 text-16 text-light-1">
                City
              </label>
            </div>
          </div>
          {/* End col-12 */}
          <div className="col-md-6">
            <div className="form-input ">
              <input
                type="text"
                required
                id="state"
                value={customerInfo.state}
                onChange={(event) =>
                  onChange(event.target.id, event.target.value)
                }
              />
              <label className="lh-1 text-16 text-light-1">
                State
              </label>
            </div>
          </div>
          {/* End col-12 */}
          <div className="col-md-6">
            <div className="form-input ">
              <input
                type="text"
                required
                id="zipCode"
                value={customerInfo.zipCode}
                onChange={(event) =>
                  onChange(event.target.id, event.target.value)
                }
              />
              <label className="lh-1 text-16 text-light-1">
                ZIP code/Postal code
              </label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-input ">
              <input
                type="text"
                required
                id="country"
                value={customerInfo.country}
                onChange={(event) =>
                  onChange(event.target.id, event.target.value)
                }
              />
              <label className="lh-1 text-16 text-light-1">
                Country
              </label>
            </div>
          </div>
          {/* End col-12 */}

          <div className="col-12">
            <div className="form-input ">
              <textarea
                required
                rows={6}
                id="specialRequests"
                value={customerInfo.specialRequests}
                onChange={(event) =>
                  onChange(event.target.id, event.target.value)
                }
              />
              <label className="lh-1 text-16 text-light-1">
                Special Requests
              </label>
            </div>
          </div>
          {/* End col-12 */}

          <div className="col-12">
            <div className="row y-gap-20 items-center justify-between">
              <div className="col-auto">
                <div className="text-14 text-light-1">
                  By proceeding with this booking, I agree to Rexe Holidays
                  Terms of Use and Privacy Policy.
                </div>
              </div>
              {/* End col-12 */}
            </div>
          </div>
          {/* End col-12 */}
        </div>
        {/* End .row */}
      </div>
      {/* End .col-xl-7 */}

      <div className="col-xl-5 col-lg-4 mt-30">
        <div className="booking-sidebar">
          <BookingDetails />
        </div>
      </div>
      {/*  */}
    </>
  );
};

export default CustomerInfo;
