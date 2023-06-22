import AddBanner from "../components/add-banner/AddBanner";
import Seo from "../components/common/Seo";
import PopularDestinations from "../components/destinations/PopularDestinations";
import DefaultFooter from "../components/footer/default";
import Header1 from "../components/header/header-1";
import Hero1 from "../components/hero/hero-1";
import CallToActions from "../components/common/CallToActions";
import Hotels from "../components/hotels/Hotels";
import {wrapper} from "../app/store";
import {getAllPopularSiteHotels} from "../slices/hotelSlice";
import {useState} from "react";

const Home = (props) => {
    const [popularHotels, setPopularHotels] = useState(props.popularHotelDetails);

    return (
        <>
            <Seo pageTitle="Home"/>
            {/* End Page Title */}

            <Header1/>
            {/* End Header 1 */}

            <Hero1/>
            {/* End Hero 1 */}

            {/*<section className="layout-pt-lg layout-pb-md" data-aos="fade-up">*/}
            {/*    <div className="container">*/}
            {/*        <div className="row y-gap-20 justify-between items-end">*/}
            {/*            <div className="col-auto">*/}
            {/*                <div className="sectionTitle -md">*/}
            {/*                    <h2 className="sectionTitle__title">Popular Destinations</h2>*/}
            {/*                    <p className=" sectionTitle__text mt-5 sm:mt-0">*/}
            {/*                        These popular destinations have a lot to offer*/}
            {/*                    </p>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            /!* End col-auto *!/*/}

            {/*            <div className="col-auto md:d-none">*/}
            {/*                <a*/}
            {/*                    href="#"*/}
            {/*                    className="button -md -blue-1 bg-blue-1-05 text-blue-1"*/}
            {/*                >*/}
            {/*                    View All Destinations*/}
            {/*                    <div className="icon-arrow-top-right ml-15"/>*/}
            {/*                </a>*/}
            {/*            </div>*/}
            {/*            /!* End col-auto *!/*/}
            {/*        </div>*/}
            {/*        /!* End .row *!/*/}

            {/*        <div className="relative pt-40 sm:pt-20">*/}
            {/*            <PopularDestinations/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    /!* End .container *!/*/}
            {/*</section>*/}
            {/* End Popular Destinations */}

            <section className="layout-pt-md layout-pb-md">
                <div className="container">
                    <div className="row y-gap-20">
                        <AddBanner/>
                    </div>
                </div>
                {/* End .container */}
            </section>
            {/* End AddBanner */}

            <section className="layout-pt-md layout-pb-md">
                <div className="container">
                    <div className="row y-gap-10 justify-between items-end">
                        <div className="col-auto">
                            <div className="sectionTitle -md">
                                <h2 className="sectionTitle__title">Most Popular Hotels</h2>
                                <p className=" sectionTitle__text mt-5 sm:mt-0">
                                    Interdum et malesuada fames ac ante ipsum
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* End .row */}

                    <div className="relative overflow-hidden pt-40 sm:pt-20 js-section-slider item_gap-x30">
                        <Hotels popularHotels={popularHotels}/>
                    </div>
                    {/* End relative */}
                </div>
            </section>
            {/* Recommended Properties */}

            <CallToActions/>
            {/* End Call To Actions Section */}

            <DefaultFooter/>
            {/* End Footer Section */}
        </>
    );
};

export const getServerSideProps = wrapper.getServerSideProps((store) =>
    async ({req, res, params, query, ...etc}) => {
        await store.dispatch(getAllPopularSiteHotels());
        const state = store.getState();
        console.log("State on server", state);
        return {
            props: {
                query: query,
                popularHotelDetails: state.hotel.sitePopularHotels,
            },
        };
    }
);

export default Home;
