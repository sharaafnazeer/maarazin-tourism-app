import Seo from "../../../components/common/Seo";
import Sidebar from "../common/Sidebar";
import Header from "../../../components/header/dashboard-header";
import Footer from "../common/Footer";
import FilterBox from "./components/filter-box";
import {getSession} from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllReservations } from "../../../slices/reservationSlice";
import ReservationTable from "./components/ReservationTable";

const Index = () => {

    const dispatch = useDispatch();   
    const allReservations = useSelector(state => state.reservation.reserversions);
    
    useEffect(() => {
      dispatch(getAllReservations());
    }, [])
    



    return (
        <>
            <Seo pageTitle="Vendor Reservation Details"/>
            {/* End Page Title */}

            <div className="header-margin"></div>

            <Header/>
            {/* End dashboard-header */}

            <div className="dashboard">
                <div className="dashboard__sidebar bg-white scroll-bar-1">
                    <Sidebar/>
                    {/* End sidebar */}
                </div>
                {/* End dashboard__sidebar */}

                <div className="dashboard__main">
                    <div className="dashboard__content bg-light-2">
                        <div className="row y-gap-20 justify-between items-end pb-60 lg:pb-40 md:pb-32">
                            <div className="col-auto">
                                <h1 className="text-30 lh-14 fw-600">
                                    Reservations
                                </h1>
                                <div className="text-15 text-light-1">
                                    Show the client hotel reservation
                                </div>
                            </div>
                            {/* End .col-auto */}

                            <div className="col-auto">
                                <FilterBox/>
                            </div>
                        </div>
                        {/* End .row */}

                        <div className="py-30 px-30 rounded-4 bg-white shadow-3">
                           <ReservationTable allReservations={allReservations}/>
                            {/* End tabs */}
                        </div>
                        <Footer/>
                    </div>
                    {/* End .dashboard__content */}
                </div>
                {/* End dashbaord content */}
            </div>
            {/* End dashbaord content */}
        </>
    );
};

export async function getServerSideProps(context) {
    const session = await getSession({req: context.req});
    if (!session) {
        context.res.statusCode = 302
        context.res.setHeader('Location', '/auth/login')
        return {props: {}}
    }
    // We'll pass the returned `user` to the page's React Component as a prop
    return {props: {session}};
}

export default Index;
