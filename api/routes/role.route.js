const express = require('express');
const router = express.Router();
const roleController = require('../controllers/role.controller');
const authMiddleware = require("../middlewares/authMiddleware");

router.get('', authMiddleware, roleController.getRolesController);

module.exports = router;