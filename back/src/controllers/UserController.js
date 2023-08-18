const User = require('../models/User');

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