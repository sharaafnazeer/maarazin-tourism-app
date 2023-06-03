const {AttributeGroup} = require('../models/attribute-group.model');
const getAttributesWithGroup = async (req, res, next) => {
    try {
        const attributeGroups = await AttributeGroup.find();
        return res.status(200).send(attributeGroups);
    } catch (e) {

    }
}

module.exports = {
    getAttributesWithGroup
}