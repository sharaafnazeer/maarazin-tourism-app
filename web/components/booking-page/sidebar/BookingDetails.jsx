import {useSelector} from "react-redux";
import moment from "moment";
import {buildRating} from "../../../utils/buildRatings";
import queryParamsBuilderOnObject from "../../../utils/queryParmsBuilderOnObject";

const BookingDetails = () => {
    const reservationData = useSelector(state => state.reservation);

    return (
        <div className="px-30 py-30 border-light rounded-4">
            <div className="text-20 fw-500 mb-30">Your booking details</div>
            <div className="row x-gap-15 y-gap-20">
                <div className="col-auto">
                    <img
                        width={140}
                        height={140}
                        src={reservationData?.reservationDetails?.reservationHotelDetails?.featuredImages[0]}
                        alt="image"
                        className="size-140 rounded-4 object-cover"
                    />
                </div>
                {/* End .col */}
                <div className="col">
                    <div className="d-flex x-gap-5 pb-10">
                        {
                            buildRating(reservationData?.reservationDetails?.reservationHotelDetails?.rating)
                        }
                    </div>
                    {/* End ratings */}
                    <div className="lh-17 fw-500">
                        {
                            reservationData?.reservationDetails?.reservationHotelDetails?.name
                        }
                        {
                            " "
                        }
                        {
                            reservationData?.reservationDetails?.reservationHotelDetails?.location?.city && (`${reservationData?.reservationDetails?.reservationHotelDetails?.location?.city}`)
                        }
                    </div>
                    <div className="text-14 lh-15 mt-5">

                        {
                            reservationData?.reservationDetails?.reservationHotelDetails?.location && (
                                <>
                                    {
                                        reservationData?.reservationDetails?.reservationHotelDetails?.location?.city && (`${reservationData?.reservationDetails?.reservationHotelDetails?.location?.city}`)
                                    }
                                    {
                                        reservationData?.reservationDetails?.reservationHotelDetails?.reservationDetails?.location?.state && (`, ${reservationData?.reservationDetails?.reservationHotelDetails?.location?.state}`)
                                    }
                                    {
                                        reservationData?.reservationDetails?.reservationHotelDetails?.location?.country && (`, ${reservationData?.reservationDetails?.reservationHotelDetails?.location?.country}`)
                                    }
                                </>
                            )
                        }
                    </div>
                </div>
                {/* End .col */}
            </div>
            {/* End .row */}

            <div className="border-top-light mt-30 mb-20"/>
            <div className="row y-gap-20 justify-between">
                <div className="col-auto">
                    <div className="text-15">Check-in</div>
                    <div className="fw-500">
                        {
                            reservationData?.reservationDetails?.reservationQueryDetails?.from ? moment(reservationData?.reservationDetails?.reservationQueryDetails?.from).format('ddd, MMM Do YYYY') : ""
                        }
                    </div>
                    {/*<div className="text-15 text-light-1">15:00 – 23:00</div>*/}
                </div>
                <div className="col-auto md:d-none">
                    <div className="h-full w-1 bg-border"/>
                </div>
                <div className="col-auto text-right md:text-left">
                    <div className="text-15">Check-out</div>
                    <div className="fw-500">
                        {
                            reservationData?.reservationDetails?.reservationQueryDetails?.to ? moment(reservationData?.reservationDetails?.reservationQueryDetails?.to).format('ddd, MMM Do YYYY') : ""
                        }
                    </div>
                    {/*<div className="text-15 text-light-1">01:00 – 11:00</div>*/}
                </div>
            </div>
            {/* End row */}

            <div className="border-top-light mt-30 mb-20"/>
            <div>
                <div className="text-15">Total length of stay:</div>
                <div className="fw-500">{
                    moment(reservationData?.reservationDetails?.reservationQueryDetails?.to).diff(reservationData?.reservationDetails?.reservationQueryDetails?.from, 'days')
                } nights
                </div>
                {/*<a href="#" className="text-15 text-blue-1 underline">*/}
                {/*    Travelling on different dates?*/}
                {/*</a>*/}
            </div>

            <div className="border-top-light mt-30 mb-20"/>
            <div className="row y-gap-20 justify-between items-center">
                <div className="col-auto">
                    <div className="text-15">You selected:</div>
                    <div className="fw-500">
                        {
                            reservationData?.reservationDetails?.reservationRoomDetails?.room?.name || ""
                        }
                    </div>
                    <a href={`/hotel/hotel-single-view/${reservationData?.reservationDetails?.reservationHotelDetails?._id}?${queryParamsBuilderOnObject(reservationData?.reservationDetails?.reservationQueryDetails)}`} className="text-15 text-blue-1 underline">
                        Change your selection
                    </a>
                </div>
                <div className="col-auto">
                    <div className="text-15">
                        {
                            reservationData?.reservationDetails?.reservationRoomDetails?.finalPrice || 0
                        }
                        {
                            ", "
                        }
                        {
                            `${Number(reservationData?.reservationDetails?.reservationQueryDetails?.adults)} adult `
                        }

                        {
                            reservationData?.reservationDetails?.reservationQueryDetails?.children ? `${Number(reservationData?.reservationDetails?.reservationQueryDetails?.children)} child` : ''
                        }
                    </div>
                </div>
            </div>
            {/* End row */}
        </div>
        // End px-30
    );
};

export default BookingDetails;
