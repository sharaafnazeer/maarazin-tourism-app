import Wrapper from "./layout/wrapper";
// import Home1 from "./home/home_1";
import Dashboard from '../pages/dashboard'
import HotelListView from "../pages/hotel/hotel-list-view"

const MainRoot = () => {
  return (
    <Wrapper>
      {/* <Home1 /> */}
      {/* <Dashboard/> */}
      <HotelListView/>
    </Wrapper>
  );
};

export default MainRoot;
