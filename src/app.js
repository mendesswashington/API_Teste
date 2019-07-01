const express = require('express');
const bodyParser = require('body-parser');
const index = require('./Routes/index');
const tecnicos = require('./Routes/tecnicos');

const app = express();
const router = express.Router();

//Configurações para o framework bory-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', index);
app.use('/tecnico', tecnicos);
module.exports = app;