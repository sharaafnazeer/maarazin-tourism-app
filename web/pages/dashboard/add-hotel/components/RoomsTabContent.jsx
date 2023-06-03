import RoomImgUploader from "./rooms/RoomImgUploader";
import RoomSleepSize from "./rooms/RoomSleepSize";

const RoomsTabcontent = () => {
  return (
    <>
      <div className="row x-gap-20 y-gap-20">
        <div className="col-10">
          <div className="text-18 fw-500 mb-10">Available Rooms</div>
          <div className="form-input ">
            <input type="text" required />
            <label className="lh-1 text-16 text-light-1">Room Type Name</label>
          </div>

          {/* End BannerUploader */}

          <div className="mt-30">
            <div className="fw-500">Room Image</div>
            <RoomImgUploader />
          </div>
          {/* End RoomImageUploader */}

          <div className="mt-30">
            <div className="fw-500">Room Sleep Size</div>
            <RoomSleepSize />
          </div>
          {/* End RoomImageUploader */}

          <div className="border-top-light mt-30 mb-30" />

          
        </div>
      </div>
    </>
  );
};

export default RoomsTabcontent;
