const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const tecnicoModel = require('./Models/tecnicos-models'); 
const indexRouter = require('./Routes/index-routes');
const tecnicosRouter = require('./Routes/tecnicos-routes');
const config = require('./config');

const app = express();
//Configurações do Mongodb
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.connect(config.connectionString,  {useNewUrlParser: true}).then(()=>{
console.log("Conexão com sucesso!");
}).catch(()=>{
    console.log("Erro na conexão!");
});

//Configurações para o framework bory-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/tecnico', tecnicosRouter);
module.exports = app;