const Comments = require("../../models/Comments");
const faker = require('faker-br');

const seedComments = async function () {
    try {
        await Comments.sync({ force: true });

        for (let i = 0; i < 10; i++){
            await Comments.create({
                text: faker.lorem.text(),
                UserId: i+1,
                PostId: i+1,
            });
        }  
    } catch (error) {
        console.log(error);
    }
};

module.exports = seedComments;