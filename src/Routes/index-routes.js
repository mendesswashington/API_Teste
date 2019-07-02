const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send({
        "Title": "API TESTE",
        "Version": "0.0.1"
    });
    const teste = req.body; 
    console.log({ teste });
});

module.exports = router;