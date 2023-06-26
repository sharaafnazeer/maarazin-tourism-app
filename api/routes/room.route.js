const express = require('express');
const router = express.Router();
const multer = require('multer');
const roomController = require('../controllers/room.controller');
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
        if (file.fieldname === 'roomImages') {
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
    {name: 'roomImages', maxCount: 10}
]), authMiddleware, roomController.addRoomController);

router.put('/:roomId', upload.fields([
    {name: 'roomImages', maxCount: 10}
]), authMiddleware, roomController.updateRoomController);

router.get('/:roomId', authMiddleware, roomController.getRoomByIdController);
router.delete('/:roomId', authMiddleware, roomController.deleteRoomByIdController);
router.get('', authMiddleware, roomController.getRoomsController);

module.exports = router;