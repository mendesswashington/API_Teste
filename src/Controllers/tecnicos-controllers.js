const mongoose = require('mongoose');
const TecnicoModel = mongoose.model('Tecnico');

exports.get = (req, res) =>{
    TecnicoModel.find({}, 'nome email matricula labs').then(data =>{
        res.status(200).send(data);
    }).catch(e =>{
        res.status(400).send({message: 'Dados não encontrados! ', e});
    });
} 
exports.post =  (req, res)=>{
    const Tecnico = new TecnicoModel(req.body);
    Tecnico.save().then(() =>{
        res.status(201).send({message: 'Cadastrado realizado com sucesso!'});
    }).catch(e =>{
        res.status(400).send({message: 'Não foi possivél realizar o cadastro! ', e});
    });
};

exports.put = (req, res)=>{
    const id = req.params.id;
    
    TecnicoModel.findByIdAndUpdate(id, {
        nome: req.body.nome,
        email: req.body.email,
        matricula: req.body.matricula,
        password: req.body.password,
        labs: req.body.labs
    }).then(data =>{
        res.status(200).send('Atualização realizada com sucesso!');
    }).catch(e =>{
        res.status(400).send({message: 'Não foi possivél atualizar o cadastro! ', e});
    });
};

exports.delete = (req, res) =>{
    res.status(200).send(req.body);
};