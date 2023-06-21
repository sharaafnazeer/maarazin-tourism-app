import DealsFilter from "../sidebar/DealsFilter";
import Map from "../sidebar/Map";
import SearchBox from "../sidebar/SearchBox";
import PopularFilters from "../sidebar/PopularFilters";
import AminitesFilter from "../sidebar/AminitesFilter";
import RatingsFilter from "../sidebar/RatingsFilter";
import GuestRatingFilters from "../sidebar/GuestRatingFilters";
import StyleFilter from "../sidebar/StyleFilter";
import NeighborhoddFilter from "../sidebar/NeighborhoddFilter";
import PirceSlider from "../sidebar/PirceSlider";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar__item -no-border position-relative">
        <Map />
      </div>
      {/* End find map */}


      <div className="sidebar__item pb-30">
        <h5 className="text-18 fw-500 mb-10">Nightly Price</h5>
        <div className="row x-gap-10 y-gap-30">
          <div className="col-12">
            <PirceSlider />
          </div>
        </div>
      </div>
      {/* End Nightly priceslider */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Most Popular Filters</h5>
        <div className="sidebar-checkbox">
          <PopularFilters />
        </div>
        {/* End Sidebar-checkbox */}   
      </div>
      {/* End popular filter */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Hotel Rating</h5>
        <div className="row x-gap-10 y-gap-10 pt-10">
          <RatingsFilter />
        </div>
      </div>
      {/* End rating filter */}

      
    </>
  );
};

export default Sidebar;
