import Seo from "../../../../components/common/Seo";
import Sidebar from "../../common/Sidebar";
import Footer from "../../common/Footer";
import Header from "../../../../components/header/dashboard-header";
import SettingsTabs from "../components/index";
import { useRouter } from 'next/router'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getOneHotel } from "../../../../slices/hotelSlice";

const UpdateHotel = () => {

  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (router.query.id)
      dispatch(getOneHotel(router.query.id));
  }, [router.query?.id]);

  return (
    <>
      <Seo pageTitle="Vendor Update Hotel" />
      {/* End Page Title */}

      <div className="header-margin"></div>

      <Header />
      {/* End dashboard-header */}

      <div className="dashboard">
        <div className="dashboard__sidebar bg-white scroll-bar-1">
          <Sidebar />
          {/* End sidebar */}
        </div>
        {/* End dashboard__sidebar */}

        <div className="dashboard__main">
          <div className="dashboard__content bg-light-2">
            <div className="row y-gap-20 justify-between items-end pb-60 lg:pb-40 md:pb-32">
              <div className="col-12">
                <h1 className="text-30 lh-14 fw-600">Update Hotel</h1>
                <div className="text-15 text-light-1">
                  Lorem ipsum dolor sit amet, consectetur.
                </div>
              </div>
              {/* End .col-12 */}
            </div>
            {/* End .row */}

            <div className="py-30 px-30 rounded-4 bg-white shadow-3">
              <SettingsTabs isUpdate/>
            </div>

            <Footer />
          </div>
          {/* End .dashboard__content */}
        </div>
        {/* End dashbaord content */}
      </div>
      {/* End dashbaord content */}
    </>
  );
};

export default UpdateHotel;
