const {resolve} = require("path");
const {promises} = require("fs");
const {HotelGroup} = require("../models/hotel-group.model");
const seedHotelGroups = async () => {
    try {
        const filePath = resolve(__dirname, '..', 'data', 'hotel-groups.json');
        const data = await promises.readFile(filePath, 'utf8');
        const jsonData = JSON.parse(data);
        for (const addon of jsonData) {
            const newAddon = new HotelGroup({name: addon.name});
            await newAddon.save();
        }
        console.log('Read JSON data:', jsonData);
        return jsonData;
    } catch (error) {
        console.error('Error reading or parsing JSON:', error);
        throw error;
    }
}

const getHotelGroups = async () => {
    try {
        return await HotelGroup.find()
    } catch (e) {
        throw e;
    }
}

module.exports = {
    seedHotelGroups,
    getHotelGroups
}