import {useSelector} from "react-redux";
import moment from "moment";
import {buildRating} from "../../../utils/buildRatings";

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
                        src={reservationData?.reservationHotelDetails?.featuredImages[0]}
                        alt="image"
                        className="size-140 rounded-4 object-cover"
                    />
                </div>
                {/* End .col */}
                <div className="col">
                    <div className="d-flex x-gap-5 pb-10">
                        {
                            buildRating(reservationData?.reservationHotelDetails?.rating)
                        }
                    </div>
                    {/* End ratings */}
                    <div className="lh-17 fw-500">
                        {
                            reservationData?.reservationHotelDetails?.name
                        }
                        {
                            " "
                        }
                        {
                            reservationData?.reservationHotelDetails?.location?.city && (`${reservationData?.reservationHotelDetails?.location?.city}`)
                        }
                    </div>
                    <div className="text-14 lh-15 mt-5">

                        {
                            reservationData?.reservationHotelDetails?.location && (
                                <>
                                    {
                                        reservationData?.reservationHotelDetails?.location?.city && (`${reservationData?.reservationHotelDetails?.location?.city}`)
                                    }
                                    {
                                        reservationData?.reservationHotelDetails?.location?.state && (`, ${reservationData?.reservationHotelDetails?.location?.state}`)
                                    }
                                    {
                                        reservationData?.reservationHotelDetails?.location?.country && (`, ${reservationData?.reservationHotelDetails?.location?.country}`)
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
                            reservationData?.reservationQueryDetails?.from ? moment(reservationData?.reservationQueryDetails?.from).format('ddd, MMM Do YYYY') : ""
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
                            reservationData?.reservationQueryDetails?.to ? moment(reservationData?.reservationQueryDetails?.to).format('ddd, MMM Do YYYY') : ""
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
                    moment(reservationData?.reservationQueryDetails?.to).diff(reservationData?.reservationQueryDetails?.from, 'days')
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
                            reservationData?.reservationRoomDetails?.room?.name || ""
                        }
                    </div>
                    <a href="#" className="text-15 text-blue-1 underline">
                        Change your selection
                    </a>
                </div>
                <div className="col-auto">
                    <div className="text-15">
                        {
                            reservationData?.reservationRoomDetails?.finalPrice || 0
                        }
                        {
                            ", "
                        }
                        {
                            `${Number(reservationData?.reservationQueryDetails?.adults)} adult `
                        }

                        {
                            reservationData?.reservationQueryDetails?.children ? `${Number(reservationData?.reservationQueryDetails?.children)} child` : ''
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
