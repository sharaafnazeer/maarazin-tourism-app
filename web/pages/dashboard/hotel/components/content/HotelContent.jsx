import { useSelector} from "react-redux";
import HotelRating from "./HotelRating";


const HotelContent = ({
                          hotelData,
                          setHotelData,
                          activeRating,
                          setActiveRating
                      }) => {

    const categories = useSelector(state => state.hotel.categories);

    const onChange = (id, value) => {
        const newHotelData = {...hotelData, [id]: value};
        setHotelData(newHotelData);
    };

    return (
        <div className="row x-gap-20 y-gap-20">
            <div className="col-12">
                <div className="form-input ">
                    <input
                        type="text"
                        required
                        defaultValue={hotelData?.name || ''}
                        id="name"
                        onChange={(evt) => onChange([evt.target.id], evt.target.value)}
                    />
                    <label className="lh-1 text-16 text-light-1">Hotel Name</label>
                </div>
            </div>
            {/* End Name */}

            <div className="col-12">
                <div className="form-input ">
          <textarea
              required
              defaultValue={hotelData?.description || ''}
              rows={5}
              id="description"
              onChange={(event) => onChange(event.target.id, event.target.value)}
          />
                    <label className="lh-1 text-16 text-light-1">Content</label>
                </div>
            </div>
            {/* End Content */}

            <div className="mt-10">
                <div className="row">
                    <div className="col-auto">
                        <div className="fw-500 mt-10">Category</div>
                    </div>
                    <div className="col-md-6">
                        <div className="col-12">
                            <select
                                className="form-select rounded-10 border-light-1 justify-between text-12 fw-500 px-20 w-200 h-50  sm:w-full text-14"
                                id="hotelGroupId"
                                value={hotelData?.hotelGroupId || ''}
                                onChange={(event) => onChange(event.target.id, event.target.value)}
                            >
                                <option key={"None"} value="">Select</option>
                                {categories && categories.map((cat) => (
                                    <option key={cat._id} value={cat._id}>{cat.name}</option>
                                ))}
                            </select>
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
                        <HotelRating
                            activeRating={activeRating}
                            setActiveRating={setActiveRating}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelContent;
