const Post = require("../../models/Post");
const faker = require('faker-br');

const seedPost = async function () {
    try {
        await Post.sync({ force: true });

        for (let i = 0; i < 10; i++){
            await Post.create({
                text: faker.lorem.text(),
                image: faker.image.abstract(),
                UserId: i+1,
            });
        }  
    } catch (error) {
        console.log(error);
    }
};

module.exports = seedPost;