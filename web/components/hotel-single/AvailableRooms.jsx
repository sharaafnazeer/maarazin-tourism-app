import {useEffect, useState} from "react";
import {buildSleeps} from "../../utils/buildSleeps";
import {buildPriceIncludes} from "../../utils/buildPriceIncludes";

const AvailableRooms = ({hotelData}) => {
    const [rooms, setRooms] = useState([]);
    const [reservationRoomPrices, setReservationRoomPrices] = useState([]);

    useEffect(() => {
        if (hotelData) {
            setRooms(hotelData.rooms);
            const reserveRoomPrices = hotelData.rooms.map((room) => {
                return {
                    roomId: room._id,
                    roomPrice: room.roomPrice,
                    finalPrice: room.roomPrice,
                    finalNumRooms: 1,
                    combinations: room.roomCombinations.map((comb, index) => {
                        return {
                            combinationId: comb.combinationId,
                            combinationPrice: comb.totalAmount,
                            combinationSelected: index === 0,
                            numberOfCombinationsSelected: index === 0 ? 1 : 0
                        }
                    })
                }
            })
            setReservationRoomPrices(reserveRoomPrices);
        }
    }, [hotelData]);


    const calculateFinalPrice = (roomId, value, combinationId = "", combinationAmount, isFirst) => {


        const finalRoom = reservationRoomPrices.find((room) => room.roomId === roomId);

        const selectedCombination = finalRoom.combinations.find((combination) => combination.combinationId === combinationId);
        const newSelectedCombination = {
            ...selectedCombination,
            combinationPrice: value ? Number(value) * combinationAmount : combinationAmount,
            combinationSelected: !!value,
            numberOfCombinationsSelected: Number(value),
        }
        finalRoom.combinations = [...finalRoom.combinations.filter((combination) => combination.combinationId !== combinationId), newSelectedCombination];
        let finalRoomPrice = 0;
        let finalNumbRooms = 0;

        finalRoom.combinations.forEach((comb) => {
            const price = comb.combinationPrice * comb.numberOfCombinationsSelected;
            finalRoomPrice += price;
            finalNumbRooms += comb.numberOfCombinationsSelected
        });
        finalRoom.finalPrice = finalRoomPrice;
        finalRoom.finalNumRooms = finalNumbRooms;
        const finalRooms = [...reservationRoomPrices.filter((room) => room.roomId !== roomId), finalRoom];
        setReservationRoomPrices(finalRooms);
    }


    return (
        <>
            {
                rooms?.map((room, index) => (
                    <div className="border-light rounded-4 px-30 py-30 sm:px-20 sm:py-20" key={`combination-${index}`}>
                        <div className="row y-gap-20">
                            <div className="col-12">
                                <h3 className="text-18 fw-500 mb-15">{room.name}</h3>
                                <div className="roomGrid">
                                    <div className="roomGrid__header">
                                        <div>Room Type</div>
                                        <div>Benefits</div>
                                        <div>Sleeps</div>
                                        <div>Price for 1 night</div>
                                        <div>Select Rooms</div>
                                        <div/>
                                    </div>
                                    {/* End .roomGrid__header */}

                                    <div className="roomGrid__grid">
                                        <div>
                                            <div className="ratio ratio-1:1">
                                                <img
                                                    width={180}
                                                    height={180}
                                                    src={room?.roomImages[0]}
                                                    alt="image"
                                                    className="img-ratio rounded-4"
                                                />
                                            </div>
                                            {/* End image */}
                                            <div className="y-gap-5 mt-20">
                                                {
                                                    [...room?.facilities]?.splice(0, 5).map((facility, index) => (
                                                        <div className="d-flex items-center"
                                                             key={`room-facility-${index}`}>
                                                            {/*<i className="icon-no-smoke text-20 mr-10"/>*/}
                                                            <div className="text-15">{facility.name}</div>
                                                        </div>
                                                    ))
                                                }
                                                {/*<div className="d-flex items-center">*/}
                                                {/*    <i className="icon-wifi text-20 mr-10"/>*/}
                                                {/*    <div className="text-15">Free WiFi</div>*/}
                                                {/*</div>*/}
                                                {/*<div className="d-flex items-center">*/}
                                                {/*    <i className="icon-parking text-20 mr-10"/>*/}
                                                {/*    <div className="text-15">Parking</div>*/}
                                                {/*</div>*/}
                                                {/*<div className="d-flex items-center">*/}
                                                {/*    <i className="icon-kitchen text-20 mr-10"/>*/}
                                                {/*    <div className="text-15">Kitchen</div>*/}
                                                {/*</div>*/}
                                            </div>
                                            {/* End room features */}
                                            <a
                                                href="#"
                                                className="d-block text-15 fw-500 underline text-blue-1 mt-15"
                                            >
                                                Show Room Information
                                            </a>
                                        </div>
                                        {/* End roomgrid inner */}

                                        <div className="y-gap-30">
                                            {
                                                room.roomCombinations?.map((combination, index) => (
                                                    <div className="roomGrid__content"
                                                         key={`room-combination-${index}`}>
                                                        <div>
                                                            <div className="text-15 fw-500 mb-10">
                                                                Your price includes:
                                                            </div>
                                                            <div className="y-gap-8">
                                                                {
                                                                    buildPriceIncludes(combination.addons)
                                                                }
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <div className="d-flex items-center text-light-1">
                                                                {
                                                                    room.sleeps && (
                                                                        <>
                                                                            {
                                                                                buildSleeps(room.sleeps.adults, room.sleeps.children)
                                                                            }
                                                                        </>
                                                                    )
                                                                }
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <div className="text-18 lh-15 fw-500">
                                                                US ${combination?.totalAmount}
                                                            </div>
                                                            <div className="text-14 lh-18 text-light-1">
                                                                Includes taxes and charges
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <div className="dropdown js-dropdown js-price-1-active">
                                                                <select
                                                                    defaultValue={index !== 0 ? "" : "1"}
                                                                    onChange={(event) => calculateFinalPrice(event.target.id, event.target.value, combination.combinationId, combination.totalAmount, index === 0)}
                                                                    id={`${combination.roomId}`}
                                                                    className="form-select dropdown__button d-flex items-center rounded-4 border-light px-15 h-50 text-14">
                                                                    <option value="" key={`key-0`}>
                                                                        Select
                                                                    </option>
                                                                    <option value="1" key={`key-1`}>
                                                                        {
                                                                            `1 (US $${combination.totalAmount})`
                                                                        }
                                                                    </option>
                                                                    <option value="2" key={`key-2`}>
                                                                        {
                                                                            `2 (US $${combination.totalAmount * 2})`
                                                                        }
                                                                    </option>
                                                                    <option value="3" key={`key-3`}>
                                                                        {
                                                                            `3 (US $${combination.totalAmount * 3})`
                                                                        }
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                            {/* End romm Grid horizontal content */}
                                        </div>
                                        {/* End price features */}

                                        <div>
                                            <div
                                                className="text-14 lh-1">{reservationRoomPrices.find((price) => price.roomId === room._id)?.finalNumRooms || 0} rooms
                                                for
                                            </div>
                                            <div className="text-22 fw-500 lh-17 mt-5">
                                                US
                                                ${reservationRoomPrices.find((price) => price.roomId === room._id)?.finalPrice || 0}
                                            </div>
                                            <a
                                                href="#"
                                                className="button h-50 px-24 -dark-1 bg-blue-1 text-white mt-10"
                                            >
                                                Reserve <div className="icon-arrow-top-right ml-15"/>
                                            </a>
                                            <div className="text-15 fw-500 mt-30">
                                                You&lsquo;ll be taken to the next step
                                            </div>
                                            <ul className="list-disc y-gap-4 pt-5">
                                                <li className="text-14">Confirmation is immediate</li>
                                                <li className="text-14">No registration required</li>
                                                <li className="text-14">No booking or credit card fees!</li>
                                            </ul>
                                        </div>
                                        {/* End right price info */}
                                    </div>
                                </div>
                                {/* End .roomGrid */}
                            </div>
                            {/* End .col-12 */}
                        </div>
                        {/* End .row */}
                    </div>
                ))
            }
            {/* End standard twin room */}
        </>
    );
};

export default AvailableRooms;
