const User = require("../../models/User");
const faker = require('faker-br');

const seedUser = async function () {
    try {
        await User.sync({ force: true });

        for (let i = 0; i < 10; i++){
            await User.create({
                userName: faker.name.firstName(),
                email: faker.internet.email(),
                password: faker.internet.password(),
                profilePhoto: faker.image.abstract(),
                birthDate: "2001-01-11",
                hash: "212121",
                salt: "aaaaaaa"
            });
        }  
    } catch (error) {
        console.log(error);
    }
};

module.exports = seedUser;