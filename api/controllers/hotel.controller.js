const {
    addHotel,
    getHotelById,
    updateHotel,
    getHotels,
    getHotelByIdWithDetails,
    getSimilarHotelsById, getHotelsWithDetails, deleteHotelById
} = require('../services/hotel.service')
const sendJson = require("../helpers/json");
const {RecordNotFound} = require("../exceptions/errors");
const {getRoomsByHotelId, getRoomsByHotelIdWithDetails} = require("../services/room.service");

const addHotelController = async (req, res, next) => {
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

        if (response instanceof RecordNotFound) {
            return next(response)
        }

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
        const {hotelId} = req.params;
        const hotel = req.body;

        let bannerImages;
        let featuredImages; // Access uploaded featured images

        if (!req.files || Object.keys(req.files).length === 0) {
            bannerImages = [];
            featuredImages = [];
        } else {
            bannerImages = req.files['bannerImages']; // Access uploaded banner images
            featuredImages = req.files['featuredImages']
        }

        if (bannerImages && Array.isArray(bannerImages))
            hotel.bannerImages = bannerImages.map((file) => {
                return req.protocol + '://' + req.get('host') + '/uploads/' + file.filename;
            });

        if (featuredImages && Array.isArray(bannerImages))
            hotel.featuredImages = featuredImages.map((file) => {
                return req.protocol + '://' + req.get('host') + '/uploads/' + file.filename;
            });

        const response = await updateHotel(hotelId, hotel);

        if (response instanceof RecordNotFound) {
            return next(response)
        }

        return sendJson(res, 200, {title: 'Hotel updated', message: 'Hotel updated successfully', record: response});
    } catch (e) {
        console.log(e)
        return sendJson(res, 500, {
            error: {
                title: 'Hotel not updated',
                message: 'Something went wrong while updating hotel'
            }
        });
    }

}

const getHotelsController = async (req, res) => {
    try {
        const {page, size, rating, ...rest} = req.query;
        const filters = {
            ...rest,
            page: parseInt(page || 1),
            size: parseInt(size || 12),
            rating,
        }
        const response =
            req.baseUrl.includes('admin') ? await getHotels() : await getHotelsWithDetails(filters);
        return sendJson(res, 200, response);
    } catch (e) {
        return sendJson(res, 500, {
            error: {
                title: 'Failed',
                message: 'Something went wrong while retrieving hotels'
            }
        });
    }

}

const getHotelByIdController = async (req, res, next) => {
    try {
        const {hotelId} = req.params;
        const response =
            req.baseUrl.includes('admin') ? await getHotelById(hotelId) : await getHotelByIdWithDetails(hotelId);

        if (response instanceof RecordNotFound) {
            return next(response)
        }
        return sendJson(res, 200, response);
    } catch (e) {
        return sendJson(res, 500, {
            error: {
                title: 'Failed',
                message: 'Something went wrong while retrieving hotel'
            }
        });
    }

}


const deleteHotelByIdController = async (req, res, next) => {
    try {
        const {hotelId} = req.params
        const response = await deleteHotelById(hotelId);

        if (response instanceof RecordNotFound) {
            return next(response)
        }
        return sendJson(res, 200, response);
    } catch (e) {
        return sendJson(res, 500, {
            error: {
                title: 'Failed',
                message: 'Something went wrong while retrieving room'
            }
        });
    }

}

const getRoomsByHotelController = async (req, res) => {
    try {
        const {hotelId} = req.params;
        const response =
            req.baseUrl.includes('admin') ? await getRoomsByHotelId(hotelId) : await getRoomsByHotelIdWithDetails(hotelId);
        return sendJson(res, 200, response);
    } catch (e) {
        return sendJson(res, 500, {
            error: {
                title: 'Failed',
                message: 'Something went wrong while retrieving hotel rooms'
            }
        });
    }

}
const getSimilarHotelsByHotelController = async (req, res) => {
    try {
        const {hotelId} = req.params;
        const response = await getSimilarHotelsById(hotelId);
        return sendJson(res, 200, response);
    } catch (e) {
        return sendJson(res, 500, {
            error: {
                title: 'Failed',
                message: 'Something went wrong while retrieving hotel rooms'
            }
        });
    }

}

module.exports = {
    addHotelController,
    updateHotelController,
    getHotelsController,
    getHotelByIdController,
    getRoomsByHotelController,
    getSimilarHotelsByHotelController,
    deleteHotelByIdController
}