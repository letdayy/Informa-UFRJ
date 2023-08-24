const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Photo = sequelize.define("Photo", {
		path: {
			type: DataTypes.STRING,
			allowNull: true
		}
});

Photo.associate = function(models){
	Photo.belongsTo(models.User);
}

module.exports = Photo;
