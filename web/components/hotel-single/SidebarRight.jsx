import FilterBox from "../../components/hotel-single/filter-box";

const SidebarRight = ({hotel, queryData}) => {
    return (
        <div className="ml-50 lg:ml-0">
            <div className="px-30 py-30 border-light rounded-4 shadow-4">
                <div className="d-flex items-center justify-between">
                    <div>
                        <span className="text-20 fw-500">US ${hotel?.minimumRoomPrice}</span>
                        <span className="text-14 text-light-1 ml-5">nights</span>
                    </div>
                </div>
                {/* End d-flex */}

                <div className="row y-gap-20 pt-30">
                    <FilterBox queryData={queryData}/>
                </div>
            </div>
            {/* End px-30 FilterBox */}
        </div>
    );
};

export default SidebarRight;
