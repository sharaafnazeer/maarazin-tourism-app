const express = require('express');
const router = express.Router();
const seederController = require('../controllers/seeder.controller');

router.get('/attributes', seederController.attributeSeeder);
router.get('/roles', seederController.roleSeeder);
router.get('/addons', seederController.addonSeeder);
router.get('/hotel-groups', seederController.hotelGroupSeeder);
router.get('/popular-facilities', seederController.popularFacilitiesSeeder);

module.exports = router;