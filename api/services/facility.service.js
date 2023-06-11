const {resolve} = require("path");
const {promises} = require("fs");
const {FacilityGroup} = require("../models/facility-group.model");
const {Facility} = require("../models/facility.model");
const {Addon} = require("../models/addon.model");
const {PopularFacility} = require("../models/most-popular-facility.model");

const seedFacilities = async () => {
    try {
        const filePath = resolve(__dirname, '..', 'data', 'facilities.json');
        const data = await promises.readFile(filePath, 'utf8');
        const jsonData = JSON.parse(data);
        for (const group of jsonData) {
            const facilityGroup = new FacilityGroup({name: group.facilityGroup});
            const savedFacilityGroup = await facilityGroup.save();

            group.facilities.forEach((facility) => {
                const facilityItem = new Facility({name: facility.name, facilityGroup: savedFacilityGroup.id});
                facilityItem.save();
                savedFacilityGroup.facilities.push(facilityItem);
            });
            savedFacilityGroup.save();
        }
        console.log('Read JSON data:', jsonData);
        return jsonData;
    } catch (error) {
        console.error('Error reading or parsing JSON:', error);
        throw error;
    }
}

const seedAddons = async () => {
    try {
        const filePath = resolve(__dirname, '..', 'data', 'addons.json');
        const data = await promises.readFile(filePath, 'utf8');
        const jsonData = JSON.parse(data);
        for (const addon of jsonData) {
            const newAddon = new Addon({name: addon.name});
            await newAddon.save();
        }
        console.log('Read JSON data:', jsonData);
        return jsonData;
    } catch (error) {
        console.error('Error reading or parsing JSON:', error);
        throw error;
    }
}

const seedPopularFacilities = async () => {
    try {
        const filePath = resolve(__dirname, '..', 'data', 'most-popular-facilities.json');
        const data = await promises.readFile(filePath, 'utf8');
        const jsonData = JSON.parse(data);
        for (const addon of jsonData) {
            const newAddon = new PopularFacility({name: addon.name, imageUrl: addon.imageUrl});
            await newAddon.save();
        }
        console.log('Read JSON data:', jsonData);
        return jsonData;
    } catch (error) {
        console.error('Error reading or parsing JSON:', error);
        throw error;
    }
}

const getFacilitiesWithGroup = async () => {
    return await FacilityGroup.find({}).populate("facilities").exec();
}

const getAddons = async () => {
    return Addon.find();
}
const getPopularFacilities = async () => {
    return PopularFacility.find();
}

module.exports = {
    seedFacilities,
    seedPopularFacilities,
    getFacilitiesWithGroup,
    getAddons,
    seedAddons,
    getPopularFacilities,
}