const Community = require("../../models/Community");
const faker = require('faker-br');

const seedCommunity = async function () {
    try {
        await Community.sync({ force: true });

        for (let i = 0; i < 10; i++){
            await Community.create({
                name: faker.lorem.words(),
            });
        }  
    } catch (error) {
        console.log(error);
    }
};

module.exports = seedCommunity;