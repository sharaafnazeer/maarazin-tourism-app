const express = require('express');
const router = express.Router();
const locationController = require('../controllers/location.controller');

router.get('/cities', locationController.getCitiesController);

module.exports = router;