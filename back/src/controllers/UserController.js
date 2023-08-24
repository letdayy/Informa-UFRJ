const User = require('../models/User');
const path = require('path');
const Photo = require('../models/Photo');

async function create (req, res) {
    try {
        const user = await User.create(req.body);
        
        return res.status(201).json({message: "Usuário cadastrado!", User: user});

    } catch (error) {
        return res.status(500).jsson(err);
    }
};

async function index (req, res){
    try {
        const users = await User.findAll(); //ver dps
        return res.status(200).json({message:"Todos usuários listados!", User: users});
    } catch(error) {
        return res.status(500).json(error);
    }
};

async function show (req, res){
    const {id} = req.params;
    try {
        const user = await User.findByPk(id);

        return res.status(200).json({nessage: "Usuário encontrado!", User: user})
    } catch (error) {
        return res.status(500).json(error);
    }
};

async function update(req, res){
    const {id} = req.params;
    try {
        const [updated] = await User.update(req.body, {where: {id: id}});
        if (updated){
            const user = await User.findByPk(id);
            return res.status(200).json(user);
        }

        throw new Error();
    } catch (error) {
        return res.status(500).json("Usuário não encontrado");
    }
}

async function destroy (req, res){
    const {id} = req.params;

    try{
        const deleted = await User.destroy({where: {id: id}});
        if(deleted){
            return res.status(200).json("Usuário deletado");
        }

        throw new Error();
    } catch (error) {
        return res.status(500).json("Usuário não encontrado!");
    }
}

async function follow (req, res){
    const {id} = req.params;
    try{
        const userFollowing = await User.findByPk(id);
        const userFollowed = await User.findByPk(req.body.id);
        await userFollowing.addFollowing(userFollowed);
        return res.status(200).json({message: "Seguindo"});
    
    } catch (error) {
        return res.status(500).json({error});
    }
}

async function unfollow (req, res){
    const {id} = req.params;
    try{
        const userFollowing = await User.findByPk(id);
        const userFollowed = await User.findByPk(req.body.id);
        await userFollowing.removeFollowing(userFollowed);
        return res.status(200).json({msg: "Deixando de seguir"})
    
    } catch (error) {
        return res.status(500).json("error");
    }
}

async function addUserPhoto (req, res){
    const {id} = req.params;

    try{
        const user = await User.findByPk(id, {include:{model: Photo}});
        if(req.file){

            const path = process.env.APP_URL + "/uploads/" + req.file.filename;
            const photo = await Photo.create({
                path: path,

            });

            await user.setPhoto(photo);
        }

        const userUpdated = await User.fundByPk(id, {include:{model: Photo}});
        return res.status(200).json(userUpdated);
    } catch(error) {
        return res.status(500).json({error});
    }
}

async function deleteUserPhoto(req, res){
    const {id} = req.params;
    try{
        const photo = await Photo.findByPk(id);
        const pathDb = photo.path.split("/").slice(-1)[0]
        await fsPromise.unlink(path.join(__dirname, '..', '..', 'uploads', pathDb));
        await photo.destroy ();
        return res.status(200).json("Foto removida com sucesso");
    } catch (error) {
        return res.status(500).json({error});
    }
} 

module.exports = {
    create,
    index,
    show,
    update,
    destroy,
    follow,
    unfollow,
    addUserPhoto,
    deleteUserPhoto
}