const express = require('express');
const router = express.Router();
const facilityController = require('../controllers/facility.controller');

router.get('/facility-groups', facilityController.getFacilitiesWithGroupController);

module.exports = router;