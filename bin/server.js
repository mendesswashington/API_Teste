const app = require('../src/app');
const express = require('express');
const http = require('http');

const port = 3000;
const hostname = 'localhost';

const server = http.createServer(app);

//Inicia o servidor npm start
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});