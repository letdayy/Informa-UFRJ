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
User.associate = function(models){
    User.belongsToMany(models.User, {
        through: 'Follow',
        as: 'following',
        foreignKey: 'followingId'
    });

    User.hasOne(models.Photo);

    User.belongsToMany(models.User, {
        through: 'Follow',
        as: 'followed',
        foreignKey: 'followedId'
    });

    User.belongsToMany(models.Post, {
        through: models.Coments,
        constraints: false
    });

    User.hasMany(models.Post);
    
    User.belongsToMany(models.Community, {
        through: models.Favorites,
        constraints: false
    });
};

module.exports = User;