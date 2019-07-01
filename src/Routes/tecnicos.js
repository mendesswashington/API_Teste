const express = require('express');
const tecnicos = express.Router();

tecnicos.post('/', (req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    const {nome, email, password} = req.body;
    //Atenção não é possivél ter mais de um res.send() em uma função;
    res.send(JSON.stringify(req.body));
    //res.send("Seu nome: "+nome+", seu email:"+email+", sua senha:"+password+".");
    console.log(JSON.stringify(req.body));
    //console.log("Seu nome: "+nome+", seu email:"+email+", sua senha:"+password+".");
});

tecnicos.put('/:id', (req, res)=>{
    const id = req.params.id;
    res.status(200).send({
        id: id,
        item: req.body
    });
});

tecnicos.delete('/', (req, res)=>{
    res.status(200).send(req.body);
});

module.exports = tecnicos;