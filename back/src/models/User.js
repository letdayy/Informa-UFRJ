const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const User = sequelize.define('User', {
    userName: {
        type: DataTypes.STRING,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false
    },

    profilePhoto: {
        type: DataTypes.STRING,
        allowNull: false
    },

    birthDate: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false
    },

    hash: {
        type: DataTypes.STRING,
        allowNull: false
               
    },

    salt: {
        type: DataTypes.STRING,
        allowNull: false
    },

});

//Relacionamentos

module.exports = User;