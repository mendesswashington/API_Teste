const mongoose = require('mongoose');
const TecnicoModel = mongoose.model('Tecnico');

exports.post =  (req, res)=>{
    const tecnico = new TecnicoModel(JSON.stringify(req.body));
    tecnico.save().then(x =>{
        res.status(200).send({message: 'Produto cadastrado com sucesso!'});
    }).catch(e =>{
        res.status(400).send({message: 'Não foi possivél realizar o cadastro! ', e});
    });
    //res.statusCode = 201;
    //res.setHeader('Content-Type', 'application/json');
    //const {nome, email,matricula, password, labs} = req.body;
    //Atenção não é possivél ter mais de um res.send() em uma função;
    //res.send(JSON.stringify(req.body));
    //res.send("Seu nome: "+nome+", seu email:"+email+", sua senha:"+password+".");
    //console.log(JSON.stringify(req.body));
    //console.log("Seu nome: "+nome+", seu email:"+email+", sua senha:"+password+".");
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