const {resolve} = require("path");
const {promises} = require("fs");
const {Role} = require("../models/role.model");
const {User} = require("../models/user.model");
const {hash} = require("bcrypt");
const seedRoles = async () => {
    try {
        const filePath = resolve(__dirname, '..', 'data', 'roleUsers.json');
        const data = await promises.readFile(filePath, 'utf8');
        const jsonData = JSON.parse(data);
        for (const role of jsonData) {
            const newRole = new Role({name: role.name});
            const savedRole = await newRole.save();

            for (const user of role.users) {
                const newUser = new User({
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    phoneNumber: user.phoneNumber,
                    password: await hash(user.password, 10),
                    role: savedRole.id,
                });
                newUser.save();
                savedRole.users.push(newUser);
            }
            savedRole.save();
        }
        console.log('Read JSON data:', jsonData);
        return jsonData;
    } catch (error) {
        console.error('Error reading or parsing JSON:', error);
        throw error;
    }
}

const getRoles = async () => {
    try {
        return await Role.find()
    } catch (e) {
        throw e;
    }
}

module.exports = {
    seedRoles,
    getRoles
}