import GuestSearch from "./GuestSearch";
import DateSearch from "./DateSearch";
import {useEffect, useState} from "react";
import moment from "moment";
import {useRouter} from "next/router";

const index = ({queryData}) => {

    const [location, setLocation] = useState("");
    const router = useRouter();

    const [dates, setDates] = useState([
        moment().add('5', 'days').toDate(),
        moment().add('5', 'days').add('1', 'month').toDate(),
    ]);

    const [guestCounts, setGuestCounts] = useState({
        adults: 2,
        children: 0,
        rooms: 1,
    });

    useEffect(() => {
        let newGuestCount = {
            adults: 2,
            children: 0,
            rooms: 1,
        }

        if (queryData?.adults) {
            newGuestCount.adults = queryData.adults
        }

        if (queryData?.children) {
            newGuestCount.children = queryData.children
        }

        if (queryData?.rooms) {
            newGuestCount.rooms = queryData.rooms
        }

        if (queryData?.location) {
            setLocation(queryData.location);
        }

        if (queryData?.from && queryData?.to) {
            const from = moment(queryData.from).toDate();
            const to = moment(queryData.to).toDate();

            setDates([from, to]);
        }

        setGuestCounts(newGuestCount);

    }, [queryData]);

    const buildSearchParams = () => {
        let params = "?page=1&size=12";
        if (dates[0]) {
            params += "&from=" + moment(dates[0]).format('YYYY-MM-DD')
        }
        if (dates[1]) {
            params += "&to=" + moment(dates[1]).format('YYYY-MM-DD')
        }
        if (location) {
            params += "&location=" + location
        }
        if (guestCounts.adults) {
            params += "&adults=" + guestCounts.adults
        }
        if (guestCounts.children) {
            params += "&children=" + guestCounts.children
        }
        if (guestCounts.rooms) {
            params += "&rooms=" + guestCounts.rooms
        }
        return params;
    }
    return (
        <>
            <div className="col-12">
                <div className="searchMenu-date px-20 py-10 border-light rounded-4 -right js-form-dd js-calendar">
                    <div>
                        <h4 className="text-15 fw-500 ls-2 lh-16">Check in - Check out</h4>
                        <DateSearch dates={dates} setDates={setDates}/>
                    </div>
                </div>
                {/* End check-in-out */}
            </div>
            {/* End .col-12 */}

            <div className="col-12">
                <GuestSearch guestCounts={guestCounts} setGuestCounts={setGuestCounts}/>
                {/* End guest */}
            </div>
            {/* End .col-12 */}

            <div className="col-12">
                <div className="button-item h-full">
                    <button className="button -dark-1 px-35 h-60 col-12 bg-blue-1 text-white"
                            onClick={() => {
                                router.push(`/hotel/hotel-list-view${buildSearchParams()}`)
                            }}>
                        Check availability
                    </button>
                </div>
                {/* End search button_item */}
            </div>
            {/* End .col-12 */}
        </>
    );
};

export default index;
