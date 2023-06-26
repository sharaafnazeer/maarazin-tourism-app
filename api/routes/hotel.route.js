const express = require('express');
const router = express.Router();
const multer = require('multer');
const hotelController = require('../controllers/hotel.controller');
const {mkdirSync} = require("fs");
const authMiddleware = require("../middlewares/authMiddleware");

// Set storage destination and file names
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = 'uploads/';
        // Create the uploads directory if it doesn't exist
        mkdirSync(uploadDir, {recursive: true});
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const originalNameWithoutExtension = file.originalname.split('.')[0];
        const extension = file.originalname.split('.').pop();
        cb(null, originalNameWithoutExtension + '-' + uniqueSuffix + '.' + extension);
    },
});

// Create the multer middleware for multiple file uploads
const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.fieldname === 'bannerImages' || file.fieldname === 'featuredImages') {
            cb(null, true);
        } else {
            cb(null, false);
        }
    },
    limits: {
        files: 10,
    },
});

router.post('', upload.fields([
    {name: 'bannerImages', maxCount: 10},
    {name: 'featuredImages', maxCount: 10}
]), authMiddleware, hotelController.addHotelController);

router.put('/:hotelId', upload.fields([
    {name: 'bannerImages', maxCount: 10},
    {name: 'featuredImages', maxCount: 10}
]), authMiddleware, hotelController.updateHotelController);

router.get('/popular/all', hotelController.getPopularHotelsController);
router.get('/:hotelId', authMiddleware, hotelController.getHotelByIdController);
router.delete('/:hotelId', authMiddleware, hotelController.deleteHotelByIdController);
router.get('/:hotelId/rooms', authMiddleware, hotelController.getRoomsByHotelController);
router.get('/:hotelId/similar', hotelController.getSimilarHotelsByHotelController);
router.get('', authMiddleware, hotelController.getHotelsController);

module.exports = router;