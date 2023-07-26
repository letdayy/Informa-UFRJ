const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Post = sequelize.define('Post', {
    text: {
        type: DataTypes.STRING,
        allowNull: false
    },

    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
});
//Relacionamentos

module.exports = Post;