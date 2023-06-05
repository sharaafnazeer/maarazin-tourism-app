const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/health', function (req, res, next) {
    res.send('API is ready');
});

module.exports = router;
