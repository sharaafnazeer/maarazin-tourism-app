const express = require('express');
const router = express.Router();
const attributeController = require('../controllers/attribute.controller');

router.get('/attribute-groups', attributeController.getAttributesWithGroup);

module.exports = router;