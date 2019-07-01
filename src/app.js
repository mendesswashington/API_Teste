const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const router = express.Router();

//Configurações para o framework bory-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const route = router.get('/', function(req, res){
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send("Hello Word!");
    console.log("Hello Word!");
});

const create = router.post('/', (req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    const {nome, email, password} = req.body;
    //Atenção não é possivél ter mais de um res.send() em uma função;
    res.send(JSON.stringify(req.body));
    //res.send("Seu nome: "+nome+", seu email:"+email+", sua senha:"+password+".");
    console.log(JSON.stringify(req.body));
    //console.log("Seu nome: "+nome+", seu email:"+email+", sua senha:"+password+".");
});

const edit = router.put('/', (req, res)=>{
    res.status(200).send({
        "title": "Api Node",
        "method": "put",
        "version": "0.0.1",
        
    });
});

const del = router.delete('/', (req, res)=>{
    res.status(200).send({
        "title": "Api Node",
        "method": "delete",
        "version": "0.0.1",
    });
});

app.use('/', route);
app.use('/', create);
app.use('/', edit);
app.use('/', del);

module.exports = app;