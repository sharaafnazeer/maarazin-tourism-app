const PricingTabContent = () => {
  return (
    <div className="col-xl-9 col-lg-11">
      <div className="text-18 fw-500 mb-10 pt-30">
        Check in / Check out time
      </div>

      <div className="row x-gap-20 y-gap-20">
        <div className="col-md-6">
          <div className="form-input ">
            <input type="text" required />
            <label className="lh-1 text-16 text-light-1">
              Time for check in
            </label>
          </div>
        </div>
        {/* End col-6 */}
        <div className="col-md-6">
          <div className="form-input ">
            <input type="text" required />
            <label className="lh-1 text-16 text-light-1">
              Time for check out
            </label>
          </div>
        </div>
        {/* End col-6 */}
        <div className="col-md-6">
          <div className="form-input ">
            <input type="text" required />
            <label className="lh-1 text-16 text-light-1">
              Minimum advance reservations
            </label>
          </div>
        </div>
        {/* End col-6 */}
        <div className="col-md-6">
          <div className="form-input ">
            <input type="text" required />
            <label className="lh-1 text-16 text-light-1">
              Minimum day stay requirements
            </label>
          </div>
        </div>
        {/* End col-6 */}
      </div>
      {/* End row */}

      <div className="col-md-12 d-inline-block mt-30">
        <button
          type="submit"
          className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
        >
          Save Changes <div className="icon-arrow-top-right ml-15" />
        </button>
      </div>
    </div>
  );
};

export default PricingTabContent;
