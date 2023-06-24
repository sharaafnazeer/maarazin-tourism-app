import React, {useState} from "react";
import CustomerInfo from "../CustomerInfo";
import PaymentInfo from "../PaymentInfo";
import OrderSubmittedInfo from "../OrderSubmittedInfo";
import {useDispatch, useSelector} from "react-redux";
import {saveReservation} from "../../../slices/reservationSlice";
import {successNofication} from "../../../data/notification";

const Index = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const reservationData = useSelector(state => state.reservation);
    const dispatch = useDispatch();

    const steps = [
        {
            title: "Personal Details",
            stepNo: "1",
            stepBar: (
                <>
                    <div className="col d-none d-sm-block">
                        <div className="w-full h-1 bg-border"></div>
                    </div>
                </>
            ),
            content: <CustomerInfo/>,
        },
        {
            title: "Final Step",
            stepNo: "2",
            stepBar: "",
            content: <OrderSubmittedInfo/>,
        },
    ];

    const renderStep = () => {
        const {content} = steps[currentStep];
        return <>{content}</>;
    };

    const nextStep = () => {
        if (currentStep < steps.length - 1) {

            const data = {
                customer: reservationData.reservationCustomerDetails,
                roomId: reservationData.reservationRoomDetails.roomId,
                hotelId: reservationData.reservationRoomDetails.room.hotel,
                roomSelections: reservationData.reservationRoomDetails.combinations,
                numberOfRooms: reservationData.reservationRoomDetails.finalNumRooms,
                totalAmount: reservationData.reservationRoomDetails.finalPrice,
                query: reservationData.reservationQueryDetails,
            }

            dispatch(saveReservation(data))
                .unwrap()
                .then((res) => {
                    successNofication(res.message);
                    setCurrentStep(currentStep + 1);
                }).catch((err) => console.log(err));
        }
    };

    const previousStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    return (
        <>
            <div className="row x-gap-40 y-gap-30 items-center">
                {steps.map((step, index) => (
                    <React.Fragment key={index}>
                        <div className="col-auto">
                            <div
                                className="d-flex items-center cursor-pointer transition"
                                onClick={() => setCurrentStep(index)}
                            >
                                <div
                                    className={
                                        currentStep === index
                                            ? "active size-40 rounded-full flex-center bg-blue-1"
                                            : "size-40 rounded-full flex-center bg-blue-1-05 text-blue-1 fw-500"
                                    }
                                >
                                    {currentStep === index ? (
                                        <>
                                            <i className="icon-check text-16 text-white"></i>
                                        </>
                                    ) : (
                                        <>
                                            <span>{step.stepNo}</span>
                                        </>
                                    )}
                                </div>

                                <div className="text-18 fw-500 ml-10"> {step.title}</div>
                            </div>
                        </div>
                        {/* End .col */}

                        {step.stepBar}
                    </React.Fragment>
                ))}
            </div>
            {/* End stepper header part */}

            <div className="row">{renderStep()}</div>
            {/* End main content */}

            <div className="row x-gap-20 y-gap-20 pt-20">
                {/*<div className="col-auto">*/}
                {/*  <button*/}
                {/*    className="button h-60 px-24 -blue-1 bg-light-2"*/}
                {/*    disabled={currentStep === 0}*/}
                {/*    onClick={previousStep}*/}
                {/*  >*/}
                {/*    Previous*/}
                {/*  </button>*/}
                {/*</div>*/}
                {/* End prvious btn */}

                {
                    currentStep === 0 && (
                        <div className="col-auto">
                            <button
                                className="button h-60 px-24 -dark-1 bg-blue-1 text-white"
                                disabled={currentStep === steps.length - 1}
                                onClick={nextStep}
                            >
                                Confirm <div className="icon-arrow-top-right ml-15"/>
                            </button>
                        </div>
                    )
                }


                {/* End next btn */}
            </div>
            {/* End stepper button */}
        </>
    );
};

export default Index;
