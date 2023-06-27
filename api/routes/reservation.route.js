const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservation.controller');
const authMiddleware = require("../middlewares/authMiddleware");


router.post('', reservationController.addReservationController);

router.get('/:reservationId', authMiddleware, reservationController.getReservationByIdController);
router.put('/:reservationId/status', authMiddleware, reservationController.updateReservationStatusByIdController);
router.get('', authMiddleware, reservationController.getReservationsController);

module.exports = router;