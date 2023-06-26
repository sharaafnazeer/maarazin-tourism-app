import CallToActions from "../../../components/common/CallToActions";
import Seo from "../../../components/common/Seo";
import Header11 from "../../../components/header/header-11";
import DefaultFooter from "../../../components/footer/default";
import StepperBooking from "../../../components/booking-page/stepper-booking";
import {wrapper} from "../../../store/store";

const Booking = () => {

    return (
        <>
            <Seo pageTitle="Hotel Booking Page"/>
            {/* End Page Title */}

            <div className="header-margin"></div>
            {/* header top margin */}

            <Header11/>
            {/* End Header 1 */}

            <section className="pt-40 layout-pb-md">
                <div className="container">
                    <StepperBooking/>
                </div>
                {/* End container */}
            </section>
            {/* End stepper */}

            <CallToActions/>
            {/* End Call To Actions Section */}

            <DefaultFooter/>
        </>
    );
};

export const getServerSideProps = wrapper.getServerSideProps((store) =>
    async ({req, res, params, query, ...etc}) => {
        const state = store.getState()

        console.log("State on server", state?.reservation?.reservationRoomDetails);

        if (!state?.reservation?.reservationRoomDetails) {
            res.statusCode = 302
            res.setHeader('Location', '/')
            return {props: {}}
        }

        // Return the data as props
        return {
            props: {},
        };
    }
);
export default Booking;
