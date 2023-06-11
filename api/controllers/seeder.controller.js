const {seedFacilities, seedAddons, seedPopularFacilities} = require("../services/facility.service");
const sendJson = require("../helpers/json");
const {seedRoles} = require("../services/role.service");
const {seedHotelGroups} = require("../services/hotel-group.service");
const attributeSeeder = async (req, res) => {

    try {
        await seedFacilities();
        return sendJson(res, 200, {title: 'Success', message: 'Facilities seeded successfully'});
    } catch (e) {
        return sendJson(res, 500, {
            error: {
                title: 'Failed',
                message: 'Something went wrong while seeding facilities'
            }
        });
    }
}

const addonSeeder = async (req, res) => {

    try {
        await seedAddons();
        return sendJson(res, 200, {title: 'Success', message: 'Addons seeded successfully'});
    } catch (e) {
        return sendJson(res, 500, {
            error: {
                title: 'Failed',
                message: 'Something went wrong while seeding addons'
            }
        });
    }
}
const popularFacilitiesSeeder = async (req, res) => {

    try {
        await seedPopularFacilities();
        return sendJson(res, 200, {title: 'Success', message: 'Popular facilities seeded successfully'});
    } catch (e) {
        return sendJson(res, 500, {
            error: {
                title: 'Failed',
                message: 'Something went wrong while seeding popular facilities'
            }
        });
    }
}

const roleSeeder = async (req, res) => {

    try {
        await seedRoles();
        return sendJson(res, 200, {title: 'Success', message: 'Roles and users seeded successfully'});
    } catch (e) {
        return sendJson(res, 500, {
            error: {
                title: 'Failed',
                message: 'Something went wrong while seeding roles'
            }
        });
    }
}

const hotelGroupSeeder = async (req, res) => {

    try {
        await seedHotelGroups();
        return sendJson(res, 200, {title: 'Success', message: 'Hotel groups seeded successfully'});
    } catch (e) {
        return sendJson(res, 500, {
            error: {
                title: 'Failed',
                message: 'Something went wrong while seeding hotel groups'
            }
        });
    }
}

module.exports = {
    attributeSeeder,
    roleSeeder,
    addonSeeder,
    hotelGroupSeeder,
    popularFacilitiesSeeder,
}