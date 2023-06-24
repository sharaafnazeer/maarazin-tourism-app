import dynamic from "next/dynamic";

const DetailsPopup = () => {
  return (
    <>
      <button
        className="flex-center bg-light-2 rounded-4 size-35"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        <i className="icon-eye text-16 text-light-1" />
      </button>

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
                Sharaf Personal Details
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
                    <div className="row">
                      <div className="col-lg-4 col-md-6">
                        <div className="text-15 lh-12">Reference Number</div>
                        <div className="text-15 lh-12 fw-500 text-blue-1 mt-10">
                          #0001
                        </div>
                      </div>
                      {/* End .col */}
                      <div className="col-lg-4 col-md-6">
                        <div className="text-15 lh-12">Reservation Date</div>
                        <div className="text-15 lh-12 fw-500 text-blue-1 mt-10">
                          04/04/2022
                        </div>
                      </div>
                      {/* End .col */}
                      <div className="col-lg-4 col-md-6">
                        <div className="text-15 lh-12">Room Type</div>
                        <div className="text-15 lh-12 fw-500 text-blue-1 mt-10">
                          VIP
                        </div>
                      </div>
                      {/* End .col */}
                    </div>
                  </div>

                  <div className="border-light rounded-8 px-20 py-40 mt-40">
                    <div className="row y-gap-10">
                      <div className="col-12">
                        <div className="d-flex justify-between ">
                          <div className="text-15 lh-16">First name</div>
                          <div className="text-15 lh-16 fw-500 text-blue-1">
                            System
                          </div>
                        </div>
                      </div>
                      {/* End .col */}
                      <div className="col-12">
                        <div className="d-flex justify-between border-top-light pt-10">
                          <div className="text-15 lh-16">Last name</div>
                          <div className="text-15 lh-16 fw-500 text-blue-1">
                            Admin
                          </div>
                        </div>
                      </div>
                      {/* End .col */}
                      <div className="col-12">
                        <div className="d-flex justify-between border-top-light pt-10">
                          <div className="text-15 lh-16">Email</div>
                          <div className="text-15 lh-16 fw-500 text-blue-1">
                            admin@bookingcore.test
                          </div>
                        </div>
                      </div>
                      {/* End .col */}
                      <div className="col-12">
                        <div className="d-flex justify-between border-top-light pt-10">
                          <div className="text-15 lh-16">Phone</div>
                          <div className="text-15 lh-16 fw-500 text-blue-1">
                            112 666 888
                          </div>
                        </div>
                      </div>
                      {/* End .col */}
                      <div className="col-12">
                        <div className="d-flex justify-between border-top-light pt-10">
                          <div className="text-15 lh-16">Address line 1</div>
                          <div className="text-15 lh-16 fw-500 text-blue-1" />
                        </div>
                      </div>
                      {/* End .col */}
                      <div className="col-12">
                        <div className="d-flex justify-between border-top-light pt-10">
                          <div className="text-15 lh-16">Address line 2</div>
                          <div className="text-15 lh-16 fw-500 text-blue-1" />
                        </div>
                      </div>
                      {/* End .col */}
                      <div className="col-12">
                        <div className="d-flex justify-between border-top-light pt-10">
                          <div className="text-15 lh-16">City</div>
                          <div className="text-15 lh-16 fw-500 text-blue-1">
                            New York
                          </div>
                        </div>
                      </div>
                      {/* End .col */}
                      <div className="col-12">
                        <div className="d-flex justify-between border-top-light pt-10">
                          <div className="text-15 lh-16">
                            State/Province/Region
                          </div>
                          <div className="text-15 lh-16 fw-500 text-blue-1" />
                        </div>
                      </div>
                      {/* End .col */}
                      <div className="col-12">
                        <div className="d-flex justify-between border-top-light pt-10">
                          <div className="text-15 lh-16">
                            ZIP code/Postal code
                          </div>
                          <div className="text-15 lh-16 fw-500 text-blue-1" />
                        </div>
                      </div>
                      {/* End .col */}
                      <div className="col-12">
                        <div className="d-flex justify-between border-top-light pt-10">
                          <div className="text-15 lh-16">Country</div>
                          <div className="text-15 lh-16 fw-500 text-blue-1">
                            United States
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

export default dynamic(()=> Promise.resolve(DetailsPopup), {ssr:false});
