const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Community = sequelize.define('Community', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

//Relacionamentos
Community.associate = function(models){
    Community.belongsToMany(models.User, {
        through: models.Favorites,
        as: 'Favorited',
        constraints: false
    });
}
module.exports = Community;