const Client = require('../models/Client');

exports.getClientAll = async (req, res) => {
    try {
        const clients = await Client.findAll();
        res.status(200).json(clients);
    } catch (error) {
        res.status(500).json({
            error: 'Erro ao listar clientes'
        })
    }
}
exports.getClientById = async (req, res) =>{
    try{
        const client = await Client.findByPk(req.params.id);
        if(client){
            res.json(client);
        }else{
            res.status(404).json({error: 'Cliente não encontrado.'})
        }

    }catch(error){
        res.status(500).json({error: 'Erro ao buscar cliente'});
    }
}
exports.createClient = async (req, res) => {
    try{
        const newClient = await Client.create(req.body);
        res.status(201).json(newUser)
    } catch (error){
        res.status(500).json({
            error: 'Erro ao criar um cliente'
        })
    }
}
exports.updateClient = async (req, res)=>{
    try{
        const client = await Client.findByPk(req.params.id);
        if(client){
            await client.update(req.body);
            res.json(client);
        }else{
            res.status(404).json({error: 'Cliente não encontrado'})
        }
    }catch(error){
        res.status(500).json({error: 'Error ao atualizar o cliente'})
    }
}

exports.deleteClient = async (req, res) => {
    try{
        const client = await Client.findByPk(req.params.id);
        if(client){
            await Client.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(204).send();
        }else{
            res.status(204).json({error: "Cliente não encontrado"})
        }
    }catch (error){
        res.status(500).json({error: 'Erro ao deletar cliente'});
    }
}