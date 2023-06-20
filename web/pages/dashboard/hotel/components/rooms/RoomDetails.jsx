import { useDispatch, useSelector } from "react-redux";
import SearchAndNewRoom from "./SearchAndNewRoom";
import { useEffect } from "react";
import { getSelectedRoom } from "../../../../../slices/roomSlice";
import { useRouter } from "next/router";
import Image from "next/image";
import { getOneHotelRooms } from "../../../../../slices/hotelSlice";

const RoomDetails = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const hotelId = router.query.id;

  const allRooms = useSelector((state) => state.room.rooms);

  const selectedRoom = useSelector(state => state.room.selectedRoom);
  const selectedHotel = useSelector(state => state.hotel.selectedHotel);


 
  // useEffect(()=>{
  //      dispatch(getOneHotelRooms(hotelId))
  //     .unwrap()
  //     .then((res) => {
  //     //  console.log(dispatch(getOneHotelRooms(hotelId)));
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // },[])

  // console.log(selectedHotel);

  const onEditRoom =()=>{
    console.log("Clicked");
  }

  return (
    <>
      <SearchAndNewRoom />
      <div className="tabs__content pt-30 js-tabs-content">
        <div className="tabs__pane -tab-item-1 is-tab-el-active">
          <div className="overflow-scroll scroll-bar-1">
            <table className="table-4 -border-bottom col-12">
              <thead className="bg-light-2">
                <tr>
                  <th>Room Type</th>
                  <th>Members</th>
                  <th>Benifits</th>
                  <th>Facilities</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              {/* End theade */}
              <tbody>
                {allRooms?.map((item) => (
                  <tr key={item._id}> 
                    <td>
                      <div className="col">
                        <div className="row-auto">
                          <div className="text-blue-1 fw-500">{item.name}</div>
                        </div>
                        <div className="d-flex ratio ratio-1:1 w-200">
                          <Image
                            width={200}
                            height={200}
                            src="/img/hotels/1.png"
                            // src={`${item.roomImages[0]}`}
                            alt="Hotel Image"
                            className="img-ratio rounded-4"
                          />
                        </div>
                      </div>
                    </td>

                    <td>
                      <div className="col">
                        <div className="row-auto mb-2">{`${item.sleeps.adults} Adults`}</div>
                        <div className="row-auto">{`${item.sleeps.children} Child`}</div>
                      </div>
                    </td>

                    <td>{item.benefits}</td>

                    <td>
                      {item?.facilities?.map((facility) => (
                        <div className="col" key={facility._id}>
                          <div className="row mb-2">{facility}</div>
                        </div>
                      ))}
                    </td>

                    <td>
                      <div className="rounded-4 p-2 bg-blue-1-05 text-blue-1 flex-center text-14 fw-600">
                        {`US$.${item.roomPrice}`}
                      </div>
                    </td>

                    <td>
                      <div className="row x-gap-10 y-gap-10 items-center">
                        <div className="col-auto">
                          <button className="flex-center bg-light-2 rounded-4 size-35">
                            <i className="icon-eye text-16 text-light-1" />
                          </button>
                        </div>
                        <div className="col-auto">
                          <button className="flex-center bg-light-2 rounded-4 size-35" onClick={()=>onEditRoom()}>
                            <i className="icon-edit text-16 text-light-1" />
                          </button> 
                        </div>
                        <div className="col-auto">
                          <button className="flex-center bg-light-2 rounded-4 size-35">
                            <i className="icon-trash-2 text-16 text-light-1" />
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                  //  End tbody
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomDetails;
