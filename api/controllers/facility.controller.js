const {getFacilitiesWithGroup, getAddons} = require("../services/facility.service");
const sendJson = require("../helpers/json");
const getFacilitiesWithGroupController = async (req, res) => {
    try {
        const attributeGroups = await getFacilitiesWithGroup();
        return sendJson(res, 200, attributeGroups);
    } catch (e) {
        return sendJson(res, 500, {
            error: {
                title: 'Failed',
                message: 'Something went wrong while retrieving facilities'
            }
        });
    }
}
const getAddonsController = async (req, res) => {
    try {
        const addons = await getAddons();
        return sendJson(res, 200, addons);
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
    getFacilitiesWithGroupController,
    getAddonsController
}