const Post = require('../models/Post')
const Photo = require('../models/Photo');
const path = require('path');

async function create (req, res) {
    try {
        const post = await Post.create(req.body);
        return res.status(201).json({message: "Post feito!", Post: post});
    } catch(err) {
        return res.status(500).json(err);
    }
}

async function index (req, res){
    try {
        const posts = await Post.findAll();
        return res.status(200).json({message: "Todas os posts listadas", Post: posts});
    } catch (error) {
        return res.status(500).json(error);
    }
};

async function show (req,res){
    const {id} = req.params;
    try {
        const post = await Post.findByPk(id);
    
        return res.status(200).json({message: "Post encontrado", Post: post});
    } catch (error) {
        return res.status(500).json(error);
    }
};

async function update (req,res){
    const {id} = req.params;
    try {
        const [updated] = await Post.update(req.body, {where: {id: id}});
        if(updated){
            const post = await Post.findByPk(id);
            return res.status(200).json(post);
        }
        throw new Error();
    } catch (error) {
        return res.status(500).json("Post não encontrado!");
    }
}

async function destroy (req,res){
    const {id} = req.params;
    try {
        const deleted = await Post.destroy({where: {id: id}});
        if(deleted){
            return res.status(200).json("Post deletado");
        }
    
        throw new Error();
    
    } catch (error) {
        return res.status(500).json("Post não encontrado");
    }
}

async function addPostPhoto (req, res){
    const {id} = req.params;

    try{
        const post = await Post.findByPk(id, {include:{model: Photo}});
        if(req.file){
            const path = process.env.APP_URL + "/uploads/" + req.file.filename;
            const photo = await Photo.create({
                path: path,

            });
            await post.setPhoto(photo);
        }
        const postUpdated = await Post.findByPk(id, {include:{model: Photo}});
        return res.status(200).json(postUpdated);

    } catch(error) {
        return res.status(500).json({error});
    }
}

async function deletePostPhoto(req, res){
    const {id} = req.params;
    try{
        const photo = await Photo.findByPk(id);
        const pathDb = photo.path.split("/").slice(-1)[0]
        await fsPromise.unlink(path.join(__dirname,'..', '..', 'uploads', pathDb));
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
    addPostPhoto,
    deletePostPhoto
}
