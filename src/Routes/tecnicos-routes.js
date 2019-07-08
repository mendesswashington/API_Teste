const express = require('express');
const controller = require('../Controllers/tecnicos-controllers');
const router = express.Router();

router.get('/', controller.get);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/', controller.delete);

module.exports = router;