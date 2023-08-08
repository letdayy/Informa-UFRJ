const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Favorites = sequelize.define('Favorites', {
});

//Exportar Model
module.exports = Favorites;