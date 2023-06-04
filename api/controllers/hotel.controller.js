const {addHotel, getHotelById, updateHotel, getHotels} = require('../services/hotel.service')
const sendJson = require("../helpers/json");
const {RecordNotFound} = require("../exceptions/errors");

const addHotelController = async (req, res) => {
    const bannerImages = req.files['bannerImages']; // Access uploaded banner images
    const featuredImages = req.files['featuredImages']; // Access uploaded featured images
    const hotel = req.body;

    if (bannerImages && Array.isArray(bannerImages))
        hotel.bannerImages = bannerImages.map((file) => {
            return req.protocol + '://' + req.get('host') + '/uploads/' + file.filename;
        });

    if (featuredImages && Array.isArray(bannerImages))
        hotel.featuredImages = featuredImages.map((file) => {
            return req.protocol + '://' + req.get('host') + '/uploads/' + file.filename;
        });
    try {
        const response = await addHotel(hotel);
        return sendJson(res, 200, {title: 'Hotel saved', message: 'Hotel saved successfully', record: response});
    } catch (e) {
        return sendJson(res, 500, {
            error: {
                title: 'Hotel not saved',
                message: 'Something went wrong while saving hotel'
            }
        })
    }

}

const updateHotelController = async (req, res, next) => {
    try {
        const hotel = req.body;
        const bannerImages = req.files['bannerImages']; // Access uploaded banner images
        const featuredImages = req.files['featuredImages']; // Access uploaded featured images

        if (bannerImages && Array.isArray(bannerImages))
            hotel.bannerImages = bannerImages.map((file) => {
                return req.protocol + '://' + req.get('host') + '/uploads/' + file.filename;
            });

        if (featuredImages && Array.isArray(bannerImages))
            hotel.featuredImages = featuredImages.map((file) => {
                return req.protocol + '://' + req.get('host') + '/uploads/' + file.filename;
            });

        const response = await updateHotel(req.params.hotelId, hotel);

        if (response instanceof RecordNotFound) {
            return next(response)
        }

        return sendJson(res, 200, {title: 'Hotel updated', message: 'Hotel updated successfully', record: response});
    } catch (e) {
        return sendJson(res, 500, {
            error: {
                title: 'Hotel not updated',
                message: 'Something went wrong while updating hotel'
            }
        });
    }

}

const getHotelsController = async (req, res, next) => {
    try {
        const response = await getHotels();
        return sendJson(res, 200, response);
    } catch (e) {
        return sendJson(res, 500, {
            error: {
                title: 'Hotel not updated',
                message: 'Something went wrong while updating hotel'
            }
        });
    }

}
const getHotelByIdController = async (req, res, next) => {
    try {
        const response = await getHotelById(req.params.hotelId);
        return sendJson(res, 200, response);
    } catch (e) {
        return sendJson(res, 500, {
            error: {
                title: 'Hotel not updated',
                message: 'Something went wrong while updating hotel'
            }
        });
    }

}

module.exports = {
    addHotelController,
    updateHotelController,
    getHotelsController,
    getHotelByIdController
}