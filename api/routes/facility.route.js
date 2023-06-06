const express = require('express');
const router = express.Router();
const facilityController = require('../controllers/facility.controller');

router.get('/facilities', facilityController.getFacilitiesWithGroupController);
router.get('/addons', facilityController.getAddonsController);

module.exports = router;