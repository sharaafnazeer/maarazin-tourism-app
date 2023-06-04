const {FacilityGroup} = require('../models/facility-group.model');
const getFacilitiesWithGroup = async (req, res, next) => {
    try {
        const attributeGroups = await FacilityGroup.find();
        return res.status(200).send(attributeGroups);
    } catch (e) {

    }
}
module.exports = {
    getFacilitiesWithGroup
}