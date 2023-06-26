import React from "react";
import DatePicker from "react-multi-date-picker";
import moment from "moment";

const DateSearch = ({dates, setDates}) => {
    const triggerSetDate = (values) => {

        if (values[0] && values[1]) {
            let newDates = [
                moment(values[0].format('YYYY-MM-DD')).toDate(),
                moment(values[1].format('YYYY-MM-DD')).toDate()
            ];
            setDates(newDates);
        }
    }

    const disablePastDate = () => {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        const yyyy = today.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
      };

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
                minDate={disablePastDate()}
            />
        </div>
    );
};

export default DateSearch;
