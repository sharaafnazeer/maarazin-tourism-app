import SearchAndNewRoom from "./SearchAndNewRoom";
const RoomDetails = ({rooms = [], onEdit, onDelete}) => {

    return (
        <>
            <SearchAndNewRoom/>
            <div className="tabs__content pt-30 js-tabs-content">
                <div className="tabs__pane -tab-item-1 is-tab-el-active">
                    <div className="overflow-scroll scroll-bar-1">
                        <table className="table-4 -border-bottom col-12">
                            <thead className="bg-light-2">
                            <tr>
                                <th>Room Type</th>
                                <th>Members</th>
                                <th>Benefits</th>
                                <th>Facilities</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {rooms?.map((item, index) => (
                                <tr key={'room-' + index}>
                                    <td>
                                        <div className="col">
                                            <div className="row-auto">
                                                <div className="text-blue-1 fw-500">{item.name}</div>
                                            </div>
                                            <div className="d-flex ratio ratio-1:1 w-200">
                                                <img
                                                    width={200}
                                                    height={200}
                                                    src={item.roomImages.length ? item.roomImages[0] : '/img/hotels/1.png'}
                                                    alt="Hotel Image"
                                                    className="img-ratio rounded-4"
                                                />
                                            </div>
                                        </div>
                                    </td>

                                    <td>
                                        <div className="col">
                                            <div className="row-auto mb-2">{`${item.sleeps.adults || 0} Adults`}</div>
                                            <div className="row-auto">{`${item.sleeps.children || 0} Child`}</div>
                                        </div>
                                    </td>

                                    <td>{item.benefits}</td>

                                    <td>
                                        {item?.facilities?.map((facility) => (
                                            <div className="col" key={facility._id}>
                                                <div className="row mb-2">{facility.name}</div>
                                            </div>
                                        ))}
                                    </td>

                                    <td>
                                        <div
                                            className="rounded-4 p-2 bg-blue-1-05 text-blue-1 flex-center text-14 fw-600">
                                            {`US$.${item.roomPrice}`}
                                        </div>
                                    </td>

                                    <td>
                                        <div className="row x-gap-10 y-gap-10 items-center">
                                            <div className="col-auto">
                                                <button className="flex-center bg-light-2 rounded-4 size-35">
                                                    <i className="icon-eye text-16 text-light-1"/>
                                                </button>
                                            </div>
                                            <div className="col-auto">
                                                <button className="flex-center bg-light-2 rounded-4 size-35"
                                                        onClick={() => onEdit(item._id)}>
                                                    <i className="icon-edit text-16 text-light-1"/>
                                                </button>
                                            </div>
                                            <div className="col-auto">
                                                <button className="flex-center bg-light-2 rounded-4 size-35"
                                                        onClick={() => onDelete(item._id)}>
                                                    <i className="icon-trash-2 text-16 text-light-1"/>
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
