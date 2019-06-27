const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//Configurações para o framework bory-parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const port = 3000;
const hostname = 'localhost';

app.get('/', (req, res)=>{
    res.statusCode = 200;
    res.send(req.body);
    console.log(req.body);
});


//Inicia o servidor
//node ./index.js
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });