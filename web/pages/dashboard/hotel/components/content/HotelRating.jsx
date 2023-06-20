const HotelRating = ({ activeRating, setActiveRating,hotelId,selectedHotel }) => {
  // for start rating code
  const handleRatingClick = (rating) => {
    setActiveRating(rating);
  };

  // activeRating=selectedHotel.rating
  
  return (
    <>
      <div className="col-auto">
        <div className="relative js-form-dd">
          <button
            className="d-flex items-center px-15 py-5 lh-16 text-14 rounded-100 border-light -dd-button"
            data-bs-toggle="dropdown"
            data-bs-auto-close="true"
            aria-expanded="false"
            data-bs-offset="0,10"

          >
            
            {activeRating === 0 ? "Star Rating" : activeRating + " Star Rating"}
            <i className="icon icon-chevron-sm-down text-7 ml-15" />
          </button>

          <div className="dropRating dropdown-menu">
            <div className="px-20 py-20 rounded-4 bg-white border-light">
              <h5 className="text-18 fw-500 mb-10">Hotel Rating</h5>
              <div className="row x-gap-10 y-gap-10 pt-10">
                {[1, 2, 3, 4, 5, 6, 7].map((rating) => (
                  <div className="col-auto" key={rating}>
                    <button
                      className={`button -blue-1 bg-blue-1-05 text-blue-1 py-10 px-20 rounded-100 ${
                        activeRating === rating ? "active" : ""
                      }`}
                      onClick={() => handleRatingClick(rating)}
                      
                    >
                      {rating}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End .col-auto start ratings */}
    </>
  );
};

export default HotelRating;
