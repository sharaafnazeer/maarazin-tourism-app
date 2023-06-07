const express = require('express');
const router = express.Router();
const roleController = require('../controllers/role.controller');

router.get('', roleController.getRolesController);

module.exports = router;