import {useEffect, useState} from "react";
import InputRange from "react-input-range";

const PirceSlider = ({hotelsData}) => {
    const [price, setPrice] = useState({
        value: {min: 0, max: 10000},
    });

    useEffect(() => {
        setPrice({
            value: {
                min: 0,
                max: hotelsData.maxPrice || 10000
            }
        })
    }, [hotelsData])

    const handleOnChange = (value) => {
        setPrice({value});
    };

    return (
        <div className="js-price-rangeSlider">
            <div className="text-14 fw-500"></div>

            <div className="d-flex justify-between mb-20">
                <div className="text-15 text-dark-1">
                    <span className="js-lower mx-1">${price.value.min}</span>-
                    <span className="js-upper mx-1">${price.value.max}</span>
                </div>
            </div>

            <div className="px-5">
                <InputRange
                    formatLabel={(value) => ``}
                    minValue={0}
                    maxValue={10000}
                    value={price.value}
                    onChange={(value) => handleOnChange(value)}
                />
            </div>
        </div>
    );
};

export default PirceSlider;
