const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 3000;
const hostname = 'localhost';

//Configurações para o framework bory-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    const {nome, email, password} = req.body;
    //Atenção não é possivél ter mais de um res.send() em uma função;
    res.send(JSON.stringify(req.body));
    //res.send("Seu nome: "+nome+", seu email:"+email+", sua senha:"+password+".");
    console.log(JSON.stringify(req.body));
    //console.log("Seu nome: "+nome+", seu email:"+email+", sua senha:"+password+".");
});

//Inicia o servidor
//node ./index.js
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });