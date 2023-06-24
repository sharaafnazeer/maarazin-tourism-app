const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservation.controller');


router.post('', reservationController.addReservationController);

router.get('/:reservationId', reservationController.getReservationByIdController);
router.put('/:reservationId/status', reservationController.updateReservationStatusByIdController);
router.get('', reservationController.getReservationsController);

module.exports = router;