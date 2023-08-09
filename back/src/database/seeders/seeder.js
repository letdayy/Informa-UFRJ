require('../../config/dotenv')();
require('../../config/sequelize');

//const seedModel = require('./Model');
const seedUser = require('./UserSeeder');
const seedPost = require('./PostSeeder');
const seedCommunity = require('./CommunitySeeder');
const seedComments = require('./CommentSeeder');

(async () => {
  try {
    //await seedModel();
    await seedUser();
    await seedPost();
    await seedCommunity();
    await seedComments();

  } catch(err) { console.log(err) }
})();
