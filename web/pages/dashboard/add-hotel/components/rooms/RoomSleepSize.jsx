const RoomSleepSize = () => {
  return (
    <div className="row x-gap-20 y-gap-20">
      <div className="col-sm-5">
        <div className="form-input ">
          <input type="number" required />
          <label className="lh-1 text-16 text-light-1">Adults</label>
        </div>
      </div>
      {/* End Adults */}

      <div className="col-sm-5">
        <div className="form-input ">
          <input type="number" required />
          <label className="lh-1 text-16 text-light-1">Childs</label>
        </div>
      </div>
      {/* End Childs */}

      <div className="col-sm-10">
        <div className="form-input ">
          <textarea required rows={5} defaultValue={""} />
          <label className="lh-1 text-16 text-light-1">Benefits</label>
        </div>
      </div>
      {/* End Benifits */}
    </div>
  );
};

export default RoomSleepSize;
