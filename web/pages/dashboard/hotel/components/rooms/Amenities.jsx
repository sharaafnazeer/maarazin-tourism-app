import {useEffect, useState} from "react";
import AmentitiesBedOption from "./AmentitiesBedOption";

const Amenities = ({amenities, setAmenities, selectedRoom}) => {

    const [bedOption, setBedOption] = useState(0);
    const [yesChecked, setYesChecked] = useState(false);
    const [noChecked, setNoChecked] = useState(true);

    useEffect(() => {
        if (amenities && amenities.extraBed) {
            setBedOption(amenities.extraBed.numOfBeds);
        }
    }, [amenities, amenities?.extraBed])

    useEffect(() => {
        if (amenities?.extraBed?.possible) {
            setYesChecked(true);
            setNoChecked(false);
        } else {
            setYesChecked(false);
            setNoChecked(true);
        }
    }, [amenities?.extraBed?.possible])

    const triggerSetAmenities = (id, value) => {
        if (id === 'numOfBeds') {
            setBedOption(value);
            amenities = {...amenities}
            amenities.extraBed.possible = true;
            amenities.extraBed.numOfBeds = value;
            setAmenities(amenities);
        } else {
            amenities = {...amenities}
            amenities.extraBed.possible = true;
            amenities.extraBed.amountPerNight = Number(value);
            setAmenities(amenities);
        }
    }

    return (
        <>
            <div className="col-lg-8 border-light rounded-4">
                <div className="mt-20 px-20">
                    <div className="fw-500 mb-10">Extra Bed Option</div>
                    <p className="sectionTitle__text mt-5 sm:mt-0">
                        Can you provide extra bed?
                    </p>

                    <div className="form-radio x-gap-20 y-gap-20">
                        <div className="radio d-flex items-center">
                            <input type="radio" name="rating"
                                   checked={yesChecked}
                                   onChange={() => {
                                       setYesChecked(true);
                                       setNoChecked(false);
                                       setAmenities({
                                           extraBed: {
                                               possible: true,
                                               amountPerNight: 0,
                                               numOfBeds: 0
                                           }
                                       });
                                   }}/>
                            <div className="radio__mark">
                                <div className="radio__icon"/>
                            </div>
                            <div className="ml-10">Yes</div>
                        </div>

                        <div className="radio d-flex items-center">
                            <input type="radio" name="rating"
                                   checked={noChecked}
                                   onChange={() => {
                                       setYesChecked(false);
                                       setNoChecked(true);
                                       setBedOption(0);
                                       setAmenities({
                                           extraBed: {
                                               possible: false,
                                               amountPerNight: 0,
                                               numOfBeds: 0
                                           }
                                       });
                                   }}/>
                            <div className="radio__mark">
                                <div className="radio__icon"/>
                            </div>
                            <div className="ml-10">No</div>
                        </div>
                    </div>

                    {
                        yesChecked && (
                            <>
                                <div className="mt-10">
                                    <div className="row mb-10">
                                        <div className="col-auto">
                                            <p className=" sectionTitle__text sm:mt-0">
                                                Select the number of extra beds that can be added.
                                            </p>
                                        </div>
                                        <div className="col-auto">
                                            <AmentitiesBedOption bedOption={bedOption}
                                                                 setBedOption={(option) => triggerSetAmenities('numOfBeds', option)}/>
                                        </div>
                                    </div>
                                </div>
                                {/* End Amentities Bed Option */}

                                <div className="mt-30">
                                    <div className="row mb-10">
                                        <div className="col-auto">
                                            <p className=" sectionTitle__text pt-20">
                                                Enter the price per night, per bed
                                            </p>
                                        </div>
                                        <div className="col">
                                            <div className="col-lg-6">
                                                <div className="form-input ">
                                                    <input type="number" required
                                                           id="amountPerNight"
                                                           defaultValue={amenities && amenities?.extraBed?.amountPerNight || ''}
                                                           onChange={(event) => triggerSetAmenities(event.target.id, event.target.value)}
                                                    />
                                                    <label className="lh-1 text-16 text-light-1">{`US$`} 0.00</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default Amenities;
