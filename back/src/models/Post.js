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
Post.associate = function(models){
    Post.belongsToMany(models.User, {
        through: models.Comments,
        constraints: false
    });

    Post.belongsTo(models.User);
}
module.exports = Post;