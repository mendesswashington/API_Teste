const md5 = require('md5');
const emailService = require('../services/email-service');
const mongoose = require('mongoose');
const TecnicoModel = mongoose.model('Tecnico');
const authService = require('../services/auth-service');

exports.get    = async (req, res) =>{
    await TecnicoModel.find({}, 'nome email matricula password labs').then(data =>{
        res.status(200).send(data);
    }).catch(err =>{
        res.status(400).send({message: 'Dados não encontrados! ', err});
    });
};

exports.authenticate    = async (req, res) =>{
    const tec = await TecnicoModel.find({
        email: req.body.email,
        password: md5(req.body.password+global.SALT_KEY)
    }).then( () =>{
        
            const token =  authService.generateToken({
                nome:     tec.nome,
                email:    tec.email
            });

        res.status(200).send({
            token: token,
            data:{
                nome:      tec.nome,
                email:     tec.email,   
            }
        });
    }).catch(err =>{
        res.status(400).send({message: 'Dados não encontrados! ', err});
        return;
    });
};

exports.post   = async (req, res) =>{
    const Tecnico =  new TecnicoModel(
        {
            nome:     req.body.nome,
            email:     req.body.email,
            password:  md5(req.body.password+global.SALT_KEY),
            matricula: req.body.matricula,
            labs:      req.body.labs
        });
    await Tecnico.save().then(() =>{
        emailService.send(req.body.email, 'Bem vindo à equipe!', global.EMAIL_TMPL.replace('{0}', req.body.nome));
        res.status(201).send({
            message: 'Cadastrado realizado com sucesso!',
        });
    }).catch(err =>{
        res.status(400).send({message: 'Não foi possivél realizar o cadastro! ', err});
    });
};
exports.put    = async (req, res) =>{
    const id = await req.params.id;
    
    TecnicoModel.findByIdAndUpdate(id, {
        nome: req.body.nome,
        email: req.body.email,
        matricula: req.body.matricula,
        password: req.body.password,
        labs: req.body.labs
    }).then(() =>{
        res.status(200).send({message:'Atualização realizada com sucesso!'});
    }).catch(err =>{
        res.status(400).send({message: 'Não foi possivél atualizar o cadastro! ', err});
    });
};
exports.delete = async (req, res) =>{
    const id = await req.body.id;
    TecnicoModel.findByIdAndRemove(id).then(() =>{
        res.status(200).send({message:'Registro deletado com sucesso!'});
    }).catch(err =>{
        res.status(400).send({message: 'Não foi possivél deletar o registro! ', err});
    });
};