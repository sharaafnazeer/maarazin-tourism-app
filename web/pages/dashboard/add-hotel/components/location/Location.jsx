const Location = () => {
  return (
    <div className="row x-gap-20 y-gap-20">
      <div className="col-lg-4 col-md-6">
        <div className="form-input ">
          <input type="text" required />
          <label className="lh-1 text-16 text-light-1">City</label>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="form-input ">
          <input type="text" required />
          <label className="lh-1 text-16 text-light-1">State</label>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="form-input ">
          <input type="text" required />
          <label className="lh-1 text-16 text-light-1">Country</label>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="form-input ">
          <input type="text" required />
          <label className="lh-1 text-16 text-light-1">Map Latitude</label>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="form-input ">
          <input type="text" required />
          <label className="lh-1 text-16 text-light-1">Map Longitude</label>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="form-input ">
          <input type="text" required />
          <label className="lh-1 text-16 text-light-1">Map Zoom</label>
        </div>
      </div>
    </div>
  );
};

export default Location;
