const express = require('express');
const router = express.Router();
const hotelGroupController = require('../controllers/hotel-group.controller');

router.get('', hotelGroupController.getHotelGroupsController);

module.exports = router;