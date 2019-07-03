const mongoose = require('mongoose');
const TecnicoModel = mongoose.model('Tecnico');

exports.post =  (req, res)=>{
    const Tecnico = new TecnicoModel(req.body);
    Tecnico.save().then(() =>{
        res.status(200).send({message: 'Cadastrado realizado com sucesso!'});
    }).catch(e =>{
        res.status(400).send({message: 'Não foi possivél realizar o cadastro! ', e});
    });
};

exports.put = (req, res)=>{
    const id = req.params.id;
    res.status(200).send({
        id: id,
        tecnico: req.body
    });
};

exports.delete = (req, res) =>{
    res.status(200).send(req.body);
};