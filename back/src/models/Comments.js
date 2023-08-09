const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Comments = sequelize.define('Comments', {
    text: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Comments;