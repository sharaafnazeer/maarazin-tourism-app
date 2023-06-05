const {getRoles} = require("../services/role.service");
const sendJson = require("../helpers/json");
const getRolesController = async (req, res) => {

    try {
        const response = await getRoles();
        return sendJson(res, 200, response);
    } catch (e) {
        return sendJson(res, 500, {
            error: {
                title: 'Failed',
                message: 'Something went wrong while retrieving roles'
            }
        });
    }
}

module.exports = {
    getRolesController,
}