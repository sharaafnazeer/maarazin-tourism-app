const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

router.post('/login', authController.signInController);
router.post('/register', authController.signUpController);

module.exports = router;