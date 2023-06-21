import {useEffect, useState} from "react";
import moment from "moment/moment";
import Router from "next/router";
import LocationSearch from "../../hero/hero-1/LocationSearch";
import DateSearch from "../../hero/DateSearch";
import GuestSearch from "../../hero/hero-1/GuestSearch";

const MainFilterSearchBox = ({queryData}) => {

    const [location, setLocation] = useState("");

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
            <div className="mainSearch bg-white px-10 py-10 lg:px-20 lg:pt-5 lg:pb-20 rounded-4">
                <div className="button-grid items-center">
                    <LocationSearch location={location} setLocation={setLocation}/>
                    {/* End Location */}

                    <div className="searchMenu-date lg:py-20  sm:px-20 js-form-dd js-calendar">
                        <div>
                            <h4 className="text-15 fw-500 ls-2 lh-16">
                                Check in - Check out
                            </h4>
                            <DateSearch dates={dates} setDates={setDates}/>
                        </div>
                    </div>
                    {/* End check-in-out */}

                    <GuestSearch guestCounts={guestCounts} setGuestCounts={setGuestCounts}/>
                    {/* End guest */}

                    <div className="button-item h-full">
                        <button className="button -dark-1 py-15 px-40 h-full col-12 rounded-0 bg-blue-1 text-white"
                                onClick={() => Router.push("/hotel/hotel-list-view" + buildSearchParams())}
                        >
                            <i className="icon-search text-20 mr-10"/>
                            Search
                        </button>
                    </div>
                    {/* End search button_item */}
                </div>
            </div>
        </>
    );
};

export default MainFilterSearchBox;
