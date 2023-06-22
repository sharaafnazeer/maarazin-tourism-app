import ModalVideo from "react-modal-video";
import "photoswipe/dist/photoswipe.css";
import {Gallery, Item} from "react-photoswipe-gallery";
import Seo from "../../../components/common/Seo";
import Header11 from "../../../components/header/header-11";
import Overview from "../../../components/hotel-single/Overview";
import PropertyHighlights from "../../../components/hotel-single/PropertyHighlights";
import StickyHeader from "../../../components/hotel-single/StickyHeader";
import TopBreadCrumb from "../../../components/hotel-single/TopBreadCrumb";
import SidebarRight from "../../../components/hotel-single/SidebarRight";
import SidebarRight2 from "../../../components/hotel-single/SidebarRight2";
import AvailableRooms from "../../../components/hotel-single/AvailableRooms";
import Facilities from "../../../components/hotel-single/Facilities";
import Image from "next/image";
import Surroundings from "../../../components/hotel-single/Surroundings";
import Hotels2 from "../../../components/hotels/Hotels2";
import CallToActions from "../../../components/common/CallToActions";
import DefaultFooter from "../../../components/footer/default";
import Link from "next/link";
import {wrapper} from "../../../app/store";
import {getAllSimilarSiteHotels, getOneSiteHotel} from "../../../slices/hotelSlice";
import {useEffect, useState} from "react";
import {buildRating} from "../../../utils/buildRatings";

const HotelSingleV1Dynamic = (props) => {
    const [isOpen, setOpen] = useState(false);
    const [hotel, setHotel] = useState(props.selectedHotelDetails);
    const [similarHotels, setSimilarHotels] = useState(props.similarHotelDetails);

    useEffect(() => {
        setHotel(props.selectedHotelDetails)
        setSimilarHotels(props.similarHotelDetails)
    }, [props.selectedHotelDetails, props.similarHotelDetails]);
    console.log(props);

    return (
        <>
            <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId="oqNZOOWF8qM"
                onClose={() => setOpen(false)}
            />

            <Seo pageTitle="Hotel Single View"/>
            {/* End Page Title */}

            <div className="header-margin"></div>
            {/* header top margin */}

            <Header11/>
            {/* End Header 1 */}

            <TopBreadCrumb hotelData={hotel}/>
            {/* End top breadcrumb */}

            <StickyHeader hotel={hotel}/>
            {/*sticky single header for hotel single*/}

            <section className="pt-40">
                <div className="container">
                    <div className="row y-gap-20 justify-between items-end">
                        <div className="col-auto">
                            <div className="row x-gap-20  items-center">
                                <div className="col-auto">
                                    <h1 className="text-30 sm:text-25 fw-600">{hotel?.name}</h1>
                                </div>
                                {/* End .col */}
                                <div className="col-auto">
                                    {
                                        buildRating(hotel?.rating || 0)
                                    }
                                    {/* End Rating */}
                                </div>
                            </div>
                            {/* End .row */}

                            <div className="row x-gap-20 y-gap-20 items-center">
                                <div className="col-auto">
                                    <div className="d-flex items-center text-15 text-light-1">
                                        <i className="icon-location-2 text-16 mr-5"/>
                                        {
                                            hotel?.location && (
                                                <>
                                                    {
                                                        hotel?.location?.city
                                                    }
                                                    {
                                                        `, ${hotel?.location?.state}`
                                                    }
                                                    {
                                                        `, ${hotel?.location?.country}`
                                                    }
                                                </>
                                            )
                                        }
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <button
                                        data-x-click="mapFilter"
                                        className="text-blue-1 text-15 underline"
                                    >
                                        Show on map
                                    </button>
                                </div>
                            </div>
                            {/* End .row */}
                        </div>
                        {/* End .col */}

                        <div className="col-auto">
                            <div className="row x-gap-15 y-gap-15 items-center">
                                <div className="col-auto">
                                    <div className="text-14">
                                        From{" "}
                                        <span className="text-22 text-dark-1 fw-500">
                                          US${hotel?.minimumRoomPrice}
                                        </span>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <Link
                                        href={"#rooms"}
                                        className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
                                    >
                                        Select Room <div className="icon-arrow-top-right ml-15"/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* End .col */}
                    </div>
                    {/* End .row */}

                    <Gallery>
                        <div className="galleryGrid -type-1 pt-30">
                            {
                                hotel?.bannerImages.map((image, index) => (
                                    <div className="galleryGrid__item relative d-flex" key={`banner-${index}`}>
                                        <Item
                                            original={image}
                                            thumbnail={image}
                                            width={660}
                                            height={660}
                                        >
                                            {({ref, open}) => (
                                                <img
                                                    src={image}
                                                    ref={ref}
                                                    onClick={open}
                                                    alt="image"
                                                    role="button"
                                                    className="rounded-4"
                                                />
                                            )}
                                        </Item>
                                        <div className="absolute px-20 py-20 col-12 d-flex justify-end">
                                            <button
                                                className="button -blue-1 size-40 rounded-full flex-center bg-white text-dark-1">
                                                <i className="icon-heart text-16"/>
                                            </button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </Gallery>
                </div>
                {/* End .container */}
            </section>
            {/* End gallery grid wrapper */}

            <section className="pt-30">
                <div className="container">
                    <div className="row y-gap-30">
                        <div className="col-xl-8">
                            <div className="row y-gap-40">
                                <div className="col-12">
                                    <h3 className="text-22 fw-500">Most Popular Facilities</h3>
                                    <PropertyHighlights highlights={hotel?.popularFacilities}/>
                                </div>
                                {/* End .col-12 Property highlights */}

                                <div id="overview" className="col-12">
                                    <Overview hotelData={hotel}/>
                                </div>
                                {/* End .col-12  Overview */}
                                <div className="border-top-light mt-30 mb-25"/>
                            </div>
                            {/* End .row */}
                        </div>
                        {/* End .col-xl-8 */}

                        <div className="col-xl-4">
                            <div className="mb-10">
                                <SidebarRight hotel={hotel}/>
                            </div>
                            <SidebarRight2 hotelData={hotel}/>
                        </div>
                        {/* End .col-xl-4 */}
                    </div>
                    {/* End .row */}
                </div>
                {/* End container */}
            </section>
            {/* End single page content */}

            <section id="rooms" className="pt-30">
                <div className="container">
                    <div className="row pb-20">
                        <div className="col-auto">
                            <h3 className="text-22 fw-500">Available Rooms</h3>
                        </div>
                    </div>
                    {/* End .row */}
                    <AvailableRooms hotelData={hotel}/>
                </div>
                {/* End .container */}
            </section>
            {/* End Available Rooms */}

            <section className="mt-40" id="facilities">
                <div className="container">
                    <div className="row x-gap-40 y-gap-40">
                        <div className="col-12">
                            <h3 className="text-22 fw-500">Facilities of this Hotel</h3>
                            <div className="row x-gap-40 y-gap-40 pt-20">
                                <Facilities hotelData={hotel}/>
                            </div>
                            {/* End .row */}
                        </div>
                        {/* End .col-12 */}
                    </div>
                    {/* End .row */}
                </div>
                {/* End .container */}
            </section>
            {/* End facilites section */}

            <section className="pt-40">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="px-24 py-20 rounded-4 bg-light-2">
                                <div className="row x-gap-20 y-gap-20 items-center">
                                    <div className="col-auto">
                                        <div className="flex-center size-60 rounded-full bg-white">
                                            <Image
                                                width={30}
                                                height={30}
                                                src="/img/icons/health.svg"
                                                alt="icon"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <h4 className="text-18 lh-15 fw-500">
                                            Extra health &amp; safety measures
                                        </h4>
                                        <div className="text-15 lh-15">
                                            This property has taken extra health and hygiene measures
                                            to ensure that your safety is their priority
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End health &  safety measures section */}

            <section className="pt-40" id="hotel-nearby">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="text-22 fw-500">Hotel surroundings</h3>
                        </div>
                    </div>
                    {/* End .row */}

                    <div className="row x-gap-50 y-gap-30 pt-20">
                        <Surroundings hotelData={hotel}/>
                    </div>
                    {/* End .row */}
                </div>
                {/* End .container */}
            </section>
            {/* End hotel surroundings */}

            {
                similarHotels.length && (
                    <section className="layout-pt-md layout-pb-lg">
                        <div className="container">
                            <div className="row justify-center text-center">
                                <div className="col-auto">
                                    <div className="sectionTitle -md">
                                        <h2 className="sectionTitle__title">
                                            Popular properties similar to The {hotel?.name}
                                        </h2>
                                        {/*<p className=" sectionTitle__text mt-5 sm:mt-0">*/}
                                        {/*    Interdum et malesuada fames ac ante ipsum*/}
                                        {/*</p>*/}
                                    </div>
                                    {/* End sectionTitle */}
                                </div>
                                {/* End .col */}
                            </div>
                            {/* End .row */}

                            <div className="pt-40 sm:pt-20 item_gap-x30">
                                <Hotels2 similarHotels={similarHotels}/>
                                {/*<Hotels/>*/}
                                {/*<Hotels3/>*/}
                            </div>
                            {/* End slide hotel */}
                        </div>
                        {/* End .container */}
                    </section>
                )
            }
            {/* End similar hotel */}

            <CallToActions/>
            {/* End Call To Actions Section */}

            <DefaultFooter/>
        </>
    );
};

export const getServerSideProps = wrapper.getServerSideProps((store) =>
    async ({req, res, params, query, ...etc}) => {
        await store.dispatch(getOneSiteHotel(params?.id));
        await store.dispatch(getAllSimilarSiteHotels(params?.id));
        const state = store.getState()

        console.log("State on server", state);
        return {
            props: {
                query: query,
                selectedHotelDetails: state.hotel.selectedHotel,
                similarHotelDetails: state.hotel.siteSimilarHotels,
            },
        };
    }
);

export default HotelSingleV1Dynamic;
