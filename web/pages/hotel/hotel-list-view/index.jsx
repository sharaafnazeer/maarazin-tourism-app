import CallToActions from "../../../components/common/CallToActions";
import Seo from "../../../components/common/Seo";
import Header11 from "../../../components/header/header-11";
import DefaultFooter from "../../../components/footer/default";
import TopHeaderFilter from "../../../components/hotel-list/hotel-list-v1/TopHeaderFilter";
import HotelProperties from "../../../components/hotel-list/hotel-list-v1/HotelProperties";
import Pagination from "../../../components/hotel-list/common/Pagination";
import Sidebar from "../../../components/hotel-list/hotel-list-v1/Sidebar";
import {wrapper} from "../../../store/store";
import {getAllSiteHotels} from "../../../slices/hotelSlice";
import {useEffect, useState} from "react";
import MainFilterSearchBox from "../../../components/hotel-single/filter-box-2";
import {useRouter} from "next/router";


const HotelListView = (props) => {

    const [hotelsData, setHotelsData] = useState({
        page: 1,
        size: 12,
        totalCount: 0,
        records: [],
        maxPrice: 10000,
        minPrice: 0,
    });
    const [queryData, setQueryData] = useState(props.query);
    const router = useRouter();

    console.log(
        props
    )
    console.log(queryData)

    useEffect(() => {
        setHotelsData(props.hotelDetails);
    }, [props.hotelDetails, router.query])

    useEffect(() => {
        setQueryData(router.query);
    }, [router.query]);

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
                                <Sidebar hotelsData={hotelsData}/>
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
                                        <Sidebar hotelsData={hotelsData}/>
                                    </aside>
                                </div>
                                {/* End offcanvas body */}
                            </div>
                            {/* End mobile menu sidebar */}
                        </div>
                        {/* End col */}

                        <div className="col-xl-9 ">
                            <TopHeaderFilter hotelsData={hotelsData} queryData={queryData}/>
                            <div className="mt-30"></div>
                            {/* End mt--30 */}
                            <div className="row y-gap-30">
                                <HotelProperties hotels={hotelsData.records} queryData={queryData}/>
                            </div>
                            {/* End .row */}
                            <Pagination hotelsData={hotelsData}/>
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


export default HotelListView;

