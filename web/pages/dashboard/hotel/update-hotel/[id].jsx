import Seo from "../../../../components/common/Seo";
import Sidebar from "../../common/Sidebar";
import Footer from "../../common/Footer";
import Header from "../../../../components/header/dashboard-header";
import SettingsTabs from "../components/index";
import {getSession} from "next-auth/react";

const UpdateHotel = () => {


    return (
        <>
            <Seo pageTitle="Vendor Update Hotel"/>
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
                                <h1 className="text-30 lh-14 fw-600">Update Hotel</h1>
                                <div className="text-15 text-light-1">
                                    Lorem ipsum dolor sit amet, consectetur.
                                </div>
                            </div>
                            {/* End .col-12 */}

                            <div className="col-auto">
                                <Link
                                    href="/dashboard/hotels"
                                    className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
                                >
                                    All Hotels <div className="icon-arrow-top-right ml-15"></div>
                                </Link>
                            </div>
                        </div>
                        {/* End .row */}

                        <div className="py-30 px-30 rounded-4 bg-white shadow-3">
                            <SettingsTabs isUpdate/>
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

export default UpdateHotel;
