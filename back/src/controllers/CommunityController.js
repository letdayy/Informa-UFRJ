const Community = require('../models/Community');

async function create (req, res) {
    try{
        const community = await Community.create(req.body);
        return res.status(201).json({message: "Comunidade cadastrada com sucesso!", Community: community});
    } catch (err) {
        return res.status(500).json(err);
    }
}

async function index (req, res){
    try {
        const communities = await Community.findAll();
        return res.status(200).json({message: "Todas as comunidades listadas", Community: communities});
    } catch (error) {
        return res.status(500).json(error);
    }
};

async function show (req,res){
    const {id} = req.params;
    try {
        const community = await Community.findByPk(id);
    
        return res.status(200).json({message: "Comunidade encontrada", Community: community});
    } catch (error) {
        return res.status(500).json(error);
    }
};

async function update (req,res){
    const {id} = req.params;
    try {
        const [updated] = await Community.update(req.body, {where: {id: id}});
        if(updated){
            const community = await Community.findByPk(id);
            return res.status(200).json(community);
        }
        throw new Error();
    } catch (error) {
        return res.status(500).json("Comunidade não encontrada");
    }
};


async function destroy (req,res){
    const {id} = req.params;
    try {
        const deleted = await Community.destroy({where: {id: id}});
        if(deleted){
            return res.status(200).json("Comunidade deletada");
        }
    
        throw new Error();
    
    } catch (error) {
        return res.status(500).json("Comunidade não encontrada");
    }
};

module.exports = {
    create,
    index,
    show,
    update,
    destroy
}

