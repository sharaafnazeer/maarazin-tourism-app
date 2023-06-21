import { useEffect, useState } from "react";
import Pagination from "../../common/Pagination";
import ActionsButton from "../components/ActionsButton";
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";
import { getAllHotels } from "../../../../slices/hotelSlice";

const BookingTable = () => {
  const dispath = useDispatch();

  const listingAllHotels = useSelector((state) => state.hotel.hotels);
  
  useEffect(() => {
    dispath(getAllHotels());
  }, []);

  return (
    <>
      <div className="tabs -underline-2 js-tabs">
        <div className="tabs__content pt-30 js-tabs-content">
          <div className="tabs__pane -tab-item-1 is-tab-el-active">
            <div className="overflow-scroll scroll-bar-1">
              <table className="table-4 -border-bottom col-12">
                <thead className="bg-light-2">
                  <tr>
                    <th>
                      <div className="d-flex items-center">
                        <div className="form-checkbox ">
                          <input type="checkbox" name="name" />
                          <div className="form-checkbox__mark">
                            <div className="form-checkbox__icon icon-check" />
                          </div>
                        </div>
                      </div>
                    </th>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Author</th>
                    <th>Rating</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {/* End theade */}
                <tbody>
                  {listingAllHotels?.map((item,index)=>(
                  <tr key={item._id}>
                    <td>
                      <div className="d-flex items-center">
                        <div className="form-checkbox ">
                          <input type="checkbox" name="name" />
                          <div className="form-checkbox__mark">
                            <div className="form-checkbox__icon icon-check" />
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="text-blue-1 fw-500">{item.name}</td>

                    <td>{item?.location?.country}</td>

                    <td>Ali Tufan</td>

                    <td>
                      <div className="rounded-4 size-35 bg-blue-1 text-white flex-center text-12 fw-600">
                        {item?.rating}
                      </div>
                    </td>


                    <td>{item?.createdAt}</td>           
                    <td>
                      <div className="row x-gap-10 y-gap-10 items-center">
                        <div className="col-auto">
                          <button className="flex-center bg-light-2 rounded-4 size-35">
                            <i className="icon-eye text-16 text-light-1" />
                          </button>
                        </div>
                        <div className="col-auto">
                          <button className="flex-center bg-light-2 rounded-4 size-35">
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
                  ))}
                  {/* End tr */}
                </tbody>
                {/* End tbody */}
              </table>
            </div>
          </div>
        </div>
      </div>
      <Pagination />
    </>
  );
};

export default dynamic(() => Promise.resolve(BookingTable), { ssr: false });
