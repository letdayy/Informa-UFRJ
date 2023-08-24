const Comment = require('../models/Comment');
const Post = require('../models/Post');

async function create (req, res) {
    try {
        const comment = await Comment.create(req.body);
        return res.status(201).json({message: "Comentário enviado com sucesso", Comment: comment});
    } catch(err) {
        return res.status(500).json(err);
    }
}

async function index (req, res){
    const {postId} = req.params;
    try {

        const comments = await Comment.findAll({where: {PostId: postId}});
        return res.status(200).json({message: "Todos os comentários listados", Comment: comments});
    } catch (error) {
        return res.status(500).json(error);
    }
};

async function show (req,res){
    const {id} = req.params;
    try {
        const comment = await Comment.findByPk(id);
    
        return res.status(200).json({message: "Comentário encontrado", Comment: comment});
    } catch (error) {
        return res.status(500).json(error);
    }
};

async function update (req,res){
    const {id} = req.params;
    try {
        const [updated] = await Comment.update(req.body, {where: {id: id}});
        if(updated){
            const comment = await Comment.findByPk(id);
            return res.status(200).json(comment);
        }
        throw new Error();
    } catch (error) {
        return res.status(500).json("Comentário não encontrado");
    }
}

async function destroy (req,res){
    const {userId, postId} = req.params;
    try {
        const deleted = await Comment.destroy({where: {PostId: postId, UserId: userId}});
        if(deleted){
            return res.status(200).json("Comentário deletado");
        }
    
        throw new Error();
    
    } catch (error) {
        return res.status(500).json("Comentário não encontrado");
    }
}

async function addComment (req, res) {
    const {postId, userId} = req.params;
    try{
        const post = await Post.findByPk(postId);

        const constraints = {
            UserId: userId,
            PostId: postId
          }

        const comment = await Comment.create(constraints);

        await Comment.update(req.body, {where: {PostId: postId, UserId: userId}});
        return res.status(200).json({msg: "Comentário enviado", Comment: comment});
    
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
    addComment
}


