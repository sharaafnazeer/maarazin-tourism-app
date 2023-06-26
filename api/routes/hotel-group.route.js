const express = require('express');
const router = express.Router();
const hotelGroupController = require('../controllers/hotel-group.controller');
const authMiddleware = require("../middlewares/authMiddleware");

router.get('', authMiddleware, hotelGroupController.getHotelGroupsController);

module.exports = router;