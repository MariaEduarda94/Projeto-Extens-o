const User = require('../models/Driver');

exports.getDriverAll = async (req, res) => {
    try {
        const drivers = await Driver.findAll();
        res.status(200).json(drvers);
    } catch (error) {
        res.status(500).json({
            error: 'Erro ao listar motoristas'
        })
    }
}
exports.getDriverById = async (req, res) =>{
    try{
        const driver = await Driver.findByPk(req.params.id);
        if(driver){
            res.json(driver);
        }else{
            res.status(404).json({error: 'Motorista não encontrado.'})
        }

    }catch(error){
        res.status(500).json({error: 'Erro ao buscar motorista'});
    }
}
exports.createDriver = async (req, res) => {
    try{
        const newDriver = await Driver.create(req.body);
        res.status(201).json(newDriver)
    } catch (error){
        res.status(500).json({
            error: 'Erro ao criar motorista'
        })
    }
}
exports.updateDriver = async (req, res)=>{
    try{
        const driver = await Driver.findByPk(req.params.id);
        if(driver){
            await driver.update(req.body);
            res.json(driver);
        }else{
            res.status(404).json({error: 'Motorista não encontrado'})
        }
    }catch(error){
        res.status(500).json({error: 'Error ao atualizar motorista'})
    }
}

exports.deleteDriver = async (req, res) => {
    try{
        const driver = await Driver.findByPk(req.params.id);
        if(driver){
            await Driver.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(204).send();
        }else{
            res.status(204).json({error: "Motorista não encontrado"})
        }
    }catch (error){
        res.status(500).json({error: 'Erro ao deletar motorista'});
    }
}