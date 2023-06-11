import HotelRating from "./HotelRating";

const HotelContent = () => {
  return (
    <div className="row x-gap-20 y-gap-20">
      <div className="col-12">
        <div className="form-input ">
          <input type="text" required />
          <label className="lh-1 text-16 text-light-1">Hotel Name</label>
        </div>
      </div>
      {/* End Name */}

      <div className="col-12">
        <div className="form-input ">
          <textarea required rows={5} defaultValue={""} />
          <label className="lh-1 text-16 text-light-1">Content</label>
        </div>
      </div>
      {/* End Content */}

      <div className="mt-10">
        <div className="row">
          <div className="col-auto">
            <div className="fw-500 mt-20">Category</div>
          </div>
          <div className="col-md-6">
            <div className="col-12">
              <div className="form-input ">
                <input type="text" required />
                <label className="lh-1 text-16 text-light-1">
                  Hotel Category
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="row">
          <div className="col-auto">
            <div className="fw-500">Hotal Rating</div>
          </div>
          <div className="col-auto">
            <HotelRating />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelContent;
