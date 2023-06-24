import Seo from "../../../components/common/Seo";
import Sidebar from "../common/Sidebar";
import Header from "../../../components/header/dashboard-header";
import Footer from "../common/Footer";
import BookingTable from "./components/BookingTable";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { getAllHotels, deleteSelectedHotel } from "../../../slices/hotelSlice";
import { useEffect } from "react";
import { useRouter } from "next/router";
import {getSession} from "next-auth/react";

const Hotels = () => {

  const dispath = useDispatch();
  const router = useRouter();

  const listingAllHotels = useSelector((state) => state.hotel.hotels);
  
  useEffect(() => {
    dispath(getAllHotels());
  }, []);

  const onDelete = (hotelId) => {
    dispath(deleteSelectedHotel(hotelId))
    .unwrap()
    .then(() => {
      dispath(getAllHotels());
    }).catch(() => {});
  }

  const onEdit = (hotelId) => {
    router.push(`/dashboard/hotel/update-hotel/${hotelId}`)
  }

  return (
    <>
      <Seo pageTitle="Vendor Hotels" />
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
              <div className="col-auto">
                <h1 className="text-30 lh-14 fw-600">All Hotels</h1>
                <div className="text-15 text-light-1">
                  Lorem ipsum dolor sit amet, consectetur.
                </div>
              </div>
              {/* End .col-auto */}

              <div className="col-auto">
                <Link
                  href="/dashboard/hotel/add-hotel"
                  className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
                >
                  Add Hotels <div className="icon-arrow-top-right ml-15"></div>
                </Link>
              </div>
            </div>
            {/* End .row */}

            <div className="py-30 px-30 rounded-4 bg-white shadow-3">
              <BookingTable hotels={listingAllHotels} onDelete={onDelete} onEdit={onEdit}/>
              {/* End tabs */}
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

export default Hotels;
