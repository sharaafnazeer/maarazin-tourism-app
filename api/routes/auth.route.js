const express = require('express');

const router = express.Router();

const authController = require('../controllers/auth.controller');
const authMiddleware = require("../middlewares/authMiddleware");

router.post('/login', authController.signInController);
router.post('/register', authController.signUpController);
router.post('/confirm', authController.confirmUserController);
router.get('/user', authMiddleware, authController.getUserController);

module.exports = router;