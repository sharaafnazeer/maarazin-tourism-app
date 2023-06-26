const sendJson = require("../helpers/json");
const {getCities} = require("../services/location.service");
const getCitiesController = async (req, res) => {

    try {
        const response = await getCities();
        return sendJson(res, 200, response);
    } catch (e) {
        return sendJson(res, 500, {
            error: {
                title: 'Failed',
                message: 'Something went wrong while retrieving cities'
            }
        });
    }
}

module.exports = {
    getCitiesController,
}