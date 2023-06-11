const sendJson = require("../helpers/json");
const {getHotelGroups} = require("../services/hotel-group.service");
const getHotelGroupsController = async (req, res) => {
    try {
        const hotelGroups = await getHotelGroups();
        return sendJson(res, 200, hotelGroups);
    } catch (e) {
        return sendJson(res, 500, {
            error: {
                title: 'Failed',
                message: 'Something went wrong while retrieving addons'
            }
        });
    }
}
module.exports = {
    getHotelGroupsController
}