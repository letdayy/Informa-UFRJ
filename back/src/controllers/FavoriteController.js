const Favorite = require('../models/Favorites');
const Community = require('../models/Community');
const User = require('../models/User');

async function index (req, res){
    const {userId} = req.params;
    try {

        const favorites = await Favorite.findAll({where: {UserId: userId}});
        let communityIds = new Array();

        favorites.forEach((e) => {
            communityIds.push(e.CommunityId);
        });

        let communities = new Array();
        while(communityIds.length > 0) {
            communities.push(await Community.findByPk(communityIds.shift()));
        }
        
        return res.status(200).json(communities);

    } catch (error) {
        return res.status(500).json({error});
        
    }
}

async function removeFromFavorites (req,res){
    const {userId, communityId} = req.params;
    try{

        const favorites = await Favorite.findOne({where: {UserId: userId, MusicId: communityId}});
        await favorites.destroy();
        return res.status(200).json({msg: "Removida dos Favoritos!"});
    
    } catch (error) {
        return res.status(500).json({error});
    }
}

async function addToFavorites(req, res) {
    const {userId, communityId} = req.params;
    try{
      const user = await User.findByPk(userId);
      const community = await Community.findByPk(communityId);

      const constraints = {
        UserId: userId,
        CommunityId: communityId
      }

      const favorites = await Favorite.create(constraints);
         
      await Favorite.update(req.body, {where: {UserId: userId, CommunityId: communityId}});
      
      return res.status(200).json({msg: "Comunidade favoritada!"});

    } catch (error) {
        return res.status(500).json({error});
    }
}

module.exports = {
    index,
    removeFromFavorites,
    addToFavorites
}



