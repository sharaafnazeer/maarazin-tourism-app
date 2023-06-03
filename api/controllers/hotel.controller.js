const {addHotel} = require('../services/hotel.service')
const sendJson = require("../helpers/json");

const addHotelController = async (req, res, next) => {
    const bannerImages = req.files['bannerImages']; // Access uploaded banner images
    const featuredImages = req.files['featuredImages']; // Access uploaded featured images
    const hotel = req.body;

    if (bannerImages && Array.isArray(bannerImages)) {
        hotel.bannerImages = bannerImages.map((file) => {
            return req.protocol + '://' + req.get('host') + '/uploads/' + file.filename;
        });
    }

    if (featuredImages && Array.isArray(bannerImages))
        hotel.featuredImages = featuredImages.map((file) => {
            return req.protocol + '://' + req.get('host') + '/uploads/' + file.filename;
        });
    try {
        const response = await addHotel(hotel);
        return sendJson(res, 200, {title: 'Hotel saved', message: 'Hotel saved successfully', record: response});
    } catch (e) {

    }

    // // Process the uploaded files and other form fields as needed
    // // ...
    //
    // res.send(`Submitted: bannerImages=${bannerImages.map((file) => file.filename)}, featuredImages=${featuredImages.map((file) => file.filename)}`);
}

module.exports = {
    addHotelController
}