const {getFacilitiesWithGroup} = require("../services/facility.service");
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
module.exports = {
    getFacilitiesWithGroupController
}