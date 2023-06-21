import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllAddons} from "../../../../../slices/hotelSlice";

const RoomAddons = ({addons = [], setAddons}) => {


    const dispatch = useDispatch();
    const allAddons = useSelector(state => state.hotel.allAddons);

    useEffect(() => {
        dispatch(getAllAddons());
    }, []);

    const onChange = (addonId, field, value) => {
        const newAddon = {addonId: addonId, amount: ''};
        if (field === "addonId") {
            if (value) {
                if (addons.find((addon) => addon.addonId === addonId)) {
                    const newAddons = addons.filter((addon) => addon.addonId !== addonId);
                    newAddons.push(newAddon);
                    setAddons(newAddons)
                } else {
                    setAddons([...addons, newAddon])
                }
            } else {
                const newAddons = addons.filter((addon) => addon.addonId !== addonId);
                setAddons(newAddons);
            }
        }

        if (field === "amount") {
            if (value > 0) {
                newAddon.amount = Number(value);
            }else {
                newAddon.amount = ''
            }
            const newAddons = addons.filter((addon) => addon.addonId !== addonId);
            newAddons.push(newAddon);
            setAddons(newAddons)
        }
    }

    return (
        <div className="col y-gap-20">
            {allAddons.map((addon) => (
                <div className="row y-gap-10" key={addon._id}>
                    <div className="col-lg-4 col-6">
                        <div className="row ">
                            <div className="col-12">
                                <div className="d-flex items-center form-checkbox">
                                    <input type="checkbox" name="name" id="addonId"
                                           checked={addons.find((add) => add.addonId === addon._id) || false}
                                           onChange={(event) => onChange(addon._id, event.target.id, event.target.checked)}
                                    />
                                    <div className="form-checkbox__mark">
                                        <div className="form-checkbox__icon icon-check"/>
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
                            disabled={!addons.find((add) => add.addonId === addon._id)}
                            value={addons.find((add) => add.addonId === addon._id)?.amount || 0.0}
                            onChange={(event) => onChange(addon._id, event.target.id, event.target.value)}

                        />
                    </div>
                </div>
            ))}
            {/* End Addons*/}
        </div>
    );
};

export default RoomAddons;
