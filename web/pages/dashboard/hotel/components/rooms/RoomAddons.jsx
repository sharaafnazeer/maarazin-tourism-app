import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAddons } from "../../../../../slices/hotelSlice";

const RoomAddons = ({roomAddon,setRoomAddon,hotelId}) => {
  

  const dispatch = useDispatch();
  const Addons = useSelector(state => state.hotel.allAddons);

  useEffect(()=>{
    dispatch(getAllAddons());
  },[]);

  const onChange =(id,value)=>{
    const newAddon = {...roomAddon, [id]: value};
    setRoomAddon(newAddon)
  }

  return (
    <div className="col y-gap-20">
      {Addons.map((addon) => (
        <div className="row y-gap-10" key={addon._id}>
          <div className="col-lg-4 col-6">
            <div className="row ">
              <div className="col-12">
                <div className="d-flex items-center form-checkbox">
                  <input type="checkbox" name="name" />
                  <div className="form-checkbox__mark">
                    <div className="form-checkbox__icon icon-check" />
                  </div>
                  <div className="text-15 lh-11 ml-10">{addon.name}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-auto">
            <input
              type="number"
              className="text-blue-1 pl-10 border-light rounded-4 text-16"
              placeholder="Amount"
              id="amount"
              onChange={(event)=> onChange(event.target.id, event.target.value)}

            />
          </div>
        </div>
      ))}
      {/* End Addons*/}
    </div>
  );
};

export default RoomAddons;
