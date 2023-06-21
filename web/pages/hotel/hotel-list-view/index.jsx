import CallToActions from "../../../components/common/CallToActions";
import Seo from "../../../components/common/Seo";
import Header11 from "../../../components/header/header-11";
import DefaultFooter from "../../../components/footer/default";
import TopHeaderFilter from "../../../components/hotel-list/hotel-list-v1/TopHeaderFilter";
import HotelProperties from "../../../components/hotel-list/hotel-list-v1/HotelProperties";
import Pagination from "../../../components/hotel-list/common/Pagination";
import Sidebar from "../../../components/hotel-list/hotel-list-v1/Sidebar";
import {wrapper} from "../../../app/store";
import {getAllSiteHotels} from "../../../slices/hotelSlice";
import {useState} from "react";
import MainFilterSearchBox from "../../../components/hero/hero-1/MainFilterSearchBox";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllHotels } from "../../../slices/hotelSlice";
import { getAllRooms } from "../../../slices/roomSlice";

const index = (props) => {

    const [hotelsData, setHotelsData] = useState(props.hotelDetails);
    const [queryData, setQueryData] = useState(props.query);
const index = () => {

    return (
        <>
            <Seo pageTitle="Hotel List View"/>
            {/* End Page Title */}

            <div className="header-margin"></div>
            {/* header top margin */}

            <Header11/>
            {/* End Header 1 */}

            <section className="pt-40 pb-40 bg-light-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="text-center">
                                <h1 className="text-30 fw-600">Find Your Dream Luxury Hotel</h1>
                            </div>
                            {/* End text-center */}
                            <MainFilterSearchBox queryData={queryData}/>
                        </div>
                        {/* End col-12 */}
                    </div>
                </div>
            </section>
            {/* Top SearchBanner */}

            <section className="layout-pt-md layout-pb-lg">
                <div className="container">
                    <div className="row y-gap-30">
                        <div className="col-xl-3">
                            <aside className="sidebar y-gap-40 xl:d-none">
                                <Sidebar/>
                            </aside>
                            {/* End sidebar for desktop */}

                            <div
                                className="offcanvas offcanvas-start"
                                tabIndex="-1"
                                id="listingSidebar"
                            >
                                <div className="offcanvas-header">
                                    <h5 className="offcanvas-title" id="offcanvasLabel">
                                        Filter Hotels
                                    </h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="offcanvas"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                {/* End offcanvas header */}

                                <div className="offcanvas-body">
                                    <aside className="sidebar y-gap-40  xl:d-block">
                                        <Sidebar/>
                                    </aside>
                                </div>
                                {/* End offcanvas body */}
                            </div>
                            {/* End mobile menu sidebar */}
                        </div>
                        {/* End col */}

                        <div className="col-xl-9 ">
                            <TopHeaderFilter hotelsData={hotelsData}/>
                            <div className="mt-30"></div>
                            {/* End mt--30 */}
                            <div className="row y-gap-30">
                                <HotelProperties hotels={hotelsData.records}/>
                            </div>
                            {/* End .row */}
                            <Pagination/>
                        </div>
                        {/* End .col for right content */}
                    </div>
                    {/* End .row */}
                </div>
                {/* End .container */}
            </section>
            {/* End layout for listing sidebar and content */}

            <CallToActions/>
            {/* End Call To Actions Section */}

            <DefaultFooter/>
        </>
    );
};

export const getServerSideProps = wrapper.getServerSideProps((store) =>
    async ({req, res, params, query, ...etc}) => {
        // const {show, sort} = status.shopFilterReducer;
        console.log(query)
        await store.dispatch(getAllSiteHotels(query));
        const state = store.getState()

        console.log("State on server", state);

        // Return the data as props
        return {
            props: {
                query: query,
                hotelDetails: state.hotel.siteHotelData,
            },
        };
    }
);


export default index;

