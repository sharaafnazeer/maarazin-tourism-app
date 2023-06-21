import React from "react";
import DatePicker from "react-multi-date-picker";
import moment from "moment";

const DateSearch = ({dates, setDates}) => {
    // const [dates, setDates] = useState([
    //   new DateObject({ year: 2023, month: 1, day: 22 }),
    //   "December 09 2020",
    //   1597994736000, //unix time in milliseconds (August 21 2020)
    // ]);
    const triggerSetDate = (values) => {

        if (values[0] && values[1]) {
            let newDates = [
                moment(values[0].format('YYYY-MM-DD')).toDate(),
                moment(values[1].format('YYYY-MM-DD')).toDate()
            ];
            setDates(newDates);
        }
    }

    return (
        <div className="text-15 text-light-1 ls-2 lh-16 custom_dual_datepicker">
            <DatePicker
                inputClass="custom_input-picker"
                containerClassName="custom_container-picker"
                value={dates}
                onChange={triggerSetDate}
                numberOfMonths={2}
                offsetY={10}
                range
                rangeHover
                format="MMMM DD"
            />
        </div>
    );
};

export default DateSearch;
