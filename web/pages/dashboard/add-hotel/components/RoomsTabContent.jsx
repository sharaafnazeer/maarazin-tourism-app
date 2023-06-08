import Amenities from "./rooms/Amenities";
import RoomAddons from "./rooms/RoomAddons";
import RoomDetails from "./rooms/RoomDetails";
import RoomFacilities from "./rooms/RoomFacilities";
import RoomImgUploader from "./rooms/RoomImgUploader";
import RoomSleepSize from "./rooms/RoomSleepSize";
import Link from "next/link";

const RoomsTabcontent = () => {
  return (
    <>
      <div className="row x-gap-20 y-gap-20">
        <div className="col-12">
          <div className="text-18 fw-500 mb-10">Available Rooms</div>
          <div className="form-input col-10">
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
            <div className="fw-500 mb-10 text-18">Room Sleep Size</div>
            <RoomSleepSize />
          </div>
          {/* End RoomSleepSize */}

          <div className="mt-30">
            <div className="fw-500 mb-10">Pricing</div>
            <div className="col-lg-4">
              <div className="form-input ">
                <input type="number" required />
                <label className="lh-1 text-16 text-light-1">Room Price</label>
              </div>
            </div>
          </div>
          {/* End Pricing */}

          <div className="mt-30">
            <div className="fw-500 mb-10 text-18">Amenities</div>
            <Amenities />
          </div>

          <div className="border-top-light mt-30 mb-30" />

          <div className="mt-30">
            <div className="fw-500 mb-10 text-18">Most Popular Facilities</div>
            <RoomFacilities />
          </div>
          {/* End RoomFacilities */}

          <div className="border-top-light mt-30 mb-30" />

          <div className="mt-30">
            <div className="fw-500 mb-20 text-18">Room addons</div>
            <RoomAddons />
          </div>
          {/* End RoomFacilities */}

          <div className="mt-40">
            <div className="row y-gap-20 d-flex justify-end items-end pb-60 lg:pb-40 md:pb-32">
              <div className="col-auto">
                <button className="button -md -blue-1 bg-blue-1-05 text-blue-1 h-50">
                  Clear
                </button>
              </div>
              {/* End .col-auto */}

              <div className="col-auto">
                <Link
                  href="/dashboard/add-hotel"
                  className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
                >
                  Save Room
                </Link>
              </div>
            </div>
            {/* End .row */}
          </div>

          <div>
            <RoomDetails />
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomsTabcontent;
