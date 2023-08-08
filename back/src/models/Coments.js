const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Coments = sequelize.define('Coments', {
    text: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Coments;