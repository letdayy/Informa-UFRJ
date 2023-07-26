const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Community = sequelize.define('Community', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

//Relacionamentos

module.exports = Community;