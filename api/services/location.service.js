const {resolve} = require("path");
const {promises} = require("fs");
const {Country} = require("../models/country.model");
const {State} = require("../models/state.model");
const {City} = require("../models/city.model");
const {slugify} = require("../helpers/helpers");

const seedLocations = async () => {
    try {
        const filePath = resolve(__dirname, '..', 'data', 'locations.json');
        const data = await promises.readFile(filePath, 'utf8');
        const jsonData = JSON.parse(data);
        for (const country of jsonData) {
            const countryItem = new Country({name: country.name, slug: slugify(country.name)});
            const saveCountryItem = await countryItem.save();

            for (const state of country.states) {
                const stateItem = new State({name: state.name, slug: slugify(state.name), country: saveCountryItem.id});
                const savedStateItem = await stateItem.save();

                for (const city of state.cities) {
                    const cityItem = new City({name: city.name, slug: slugify(city.name), state: savedStateItem.id});
                    const savedCityItem = await cityItem.save();
                    savedStateItem.cities.push(savedCityItem);
                }
                savedStateItem.save();
                saveCountryItem.states.push(stateItem);
            }
            saveCountryItem.save();
        }
        console.log('Read JSON data:', jsonData);
        return jsonData;
    } catch (error) {
        console.error('Error reading or parsing JSON:', error);
        throw error;
    }
}

const getCountries = async () => {
    return Country.find();
}

const getStates = async () => {
    return State.find().populate('country');
}

const getCities = async () => {
    return City.find().populate('state').populate('state.country');
}

module.exports = {
    seedLocations,
    getCountries,
    getStates,
    getCities,
}