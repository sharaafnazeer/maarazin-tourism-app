const {getFacilitiesWithGroup} = require("../services/facility.service");
const sendJson = require("../helpers/json");
const getFacilitiesWithGroupController = async (req, res) => {
    try {
        const attributeGroups = await getFacilitiesWithGroup();
        return sendJson(res, 200, attributeGroups);
    } catch (e) {

    }
}
module.exports = {
    getFacilitiesWithGroupController
}