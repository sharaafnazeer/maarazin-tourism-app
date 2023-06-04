const express = require('express');
const router = express.Router();
const seederController = require('../controllers/seeder.controller');

router.get('/attributes', seederController.attributeSeeder);

module.exports = router;