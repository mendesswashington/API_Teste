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
    res.send(JSON.stringify(req.body));
    console.log(JSON.stringify(req.body));
});

//Inicia o servidor
//node ./index.js
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });