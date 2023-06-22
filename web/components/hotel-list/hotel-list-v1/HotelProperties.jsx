import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";
import Link from "next/link";
import {Fragment} from "react";
import {buildRating} from "../../../utils/buildRatings";

const HotelProperties = ({hotels = []}) => {

    return (
        <>
            {hotels.map((item) => (
                <div className="col-12" key={item?._id}>
                    <div className="border-top-light pt-30">
                        <div className="row x-gap-20 y-gap-20">
                            <div className="col-md-auto">
                                <div className="cardImage ratio ratio-1:1 w-250 md:w-1/1 rounded-4">
                                    <div className="cardImage__content">
                                        <div className="cardImage-slider rounded-4  custom_inside-slider">
                                            <Swiper
                                                className="mySwiper"
                                                modules={[Pagination, Navigation]}
                                                pagination={{
                                                    clickable: true,
                                                }}
                                                navigation={true}
                                            >
                                                {item?.featuredImages?.map((slide, i) => (
                                                    <SwiperSlide key={i}>
                                                        <img
                                                            width={250}
                                                            height={250}
                                                            className="rounded-4 col-12 js-lazy"
                                                            src={slide}
                                                            alt="image"
                                                        />
                                                    </SwiperSlide>
                                                ))}
                                            </Swiper>
                                        </div>
                                    </div>
                                    {/* End image */}

                                    <div className="cardImage__wishlist">
                                        <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                                            <i className="icon-heart text-12"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* End .col */}

                            <div className="col-md">
                                <h3 className="text-18 lh-16 fw-500">
                                    {item?.name}
                                    <br className="lg:d-none"/> {item?.location && (`${item?.location?.city}`)}
                                    <div className="d-inline-block ml-10">

                                        {
                                            buildRating(item?.rating || 0)
                                        }
                                    </div>
                                </h3>

                                <div className="row x-gap-10 y-gap-10 items-center pt-10">
                                    <div className="col-auto">
                                        <p className="text-14">
                                            {
                                                item?.location && (
                                                    <>
                                                        {
                                                            item?.location?.city && (`${item?.location?.city}`)
                                                        }
                                                        {
                                                            item?.location?.state && (`, ${item?.location?.state}`)
                                                        }
                                                        {
                                                            item?.location?.country && (`, ${item?.location?.country}`)
                                                        }
                                                    </>
                                                )
                                            }
                                        </p>
                                    </div>

                                    <div className="col-auto">
                                        <button
                                            data-x-click="mapFilter"
                                            className="d-block text-14 text-blue-1 underline"
                                        >
                                            Show on map
                                        </button>
                                    </div>
                                </div>

                                <div className="text-14 lh-15 mt-20">
                                    <div className="fw-500">{item?.minimumPriceRoom?.name}</div>
                                    <div className="text-light-1">{item?.minimumPriceRoom?.benefits}</div>
                                </div>

                                <div className="text-14 text-green-2 lh-15 mt-10">
                                    <div className="fw-500">Free cancellation</div>
                                    <div className="">
                                        You can cancel later, so lock in this great price today.
                                    </div>
                                </div>

                                <div className="row x-gap-10 y-gap-10 pt-20">
                                    {
                                        item?.popularFacilities?.map((facility, index) => (
                                            <Fragment key={`facility-${index}`}>
                                                {
                                                    facility.isActive ? (
                                                        <div className="col-auto">
                                                            <div
                                                                className="border-light rounded-100 py-5 px-20 text-14 lh-14">
                                                                {facility.name}
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <></>
                                                    )
                                                }
                                            </Fragment>
                                        ))
                                    }
                                </div>
                            </div>
                            {/* End .col-md */}

                            <div className="col-md-auto text-right md:text-left">
                                <div className="">
                                    <div className="text-14 text-light-1 mt-50 md:mt-20">
                                        1 night
                                        {
                                            item?.minimumPriceRoom?.sleeps?.adults && (
                                                <>
                                                    , {item?.minimumPriceRoom?.sleeps?.adults} adults
                                                </>
                                            )
                                        }
                                        {
                                            item?.minimumPriceRoom?.sleeps?.children && (
                                                <>
                                                    , {item?.minimumPriceRoom?.sleeps?.children} child
                                                </>
                                            )
                                        }
                                    </div>
                                    <div className="text-22 lh-12 fw-600 mt-5">
                                        US ${item?.minimumPrice}
                                    </div>
                                    {/*<div className="text-14 text-light-1 mt-5">*/}
                                    {/*    +US$828 taxes and charges*/}
                                    {/*</div>*/}

                                    <Link
                                        href={`/hotel/hotel-single-view/${item._id}`}
                                        className="button -md -dark-1 bg-blue-1 text-white mt-24"
                                    >
                                        See Availability{" "}
                                        <div className="icon-arrow-top-right ml-15"></div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default HotelProperties;
