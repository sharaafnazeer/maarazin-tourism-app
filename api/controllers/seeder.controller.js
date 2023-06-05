const {seedFacilities} = require("../services/facility.service");
const sendJson = require("../helpers/json");
const attributeSeeder = async (req, res) => {

    try {
        const response = await seedFacilities();
        return sendJson(res, 200, response);
    } catch (e) {
        return sendJson(res, 500, {
            error: {
                title: 'Failed',
                message: 'Something went wrong while retrieving rooms'
            }
        });
    }
}

module.exports = {
    attributeSeeder,
}