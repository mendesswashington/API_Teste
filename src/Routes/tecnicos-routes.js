const express = require('express');
const authService = require('../services/auth-service');
const controller = require('../Controllers/tecnicos-controllers');
const router = express.Router();

router.get('/', controller.get);
router.post('/authenticate', controller.authenticate);
router.post('/',authService.authorize, controller.post);
router.put('/:id', controller.put);
router.delete('/', controller.delete);

module.exports = router;