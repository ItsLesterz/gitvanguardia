const express = require('express');
var router = express.Router();
const gremioController = require('../controllers/gremio');
router.get('/', gremioController.getAll);
router.get('/:id', gremioController.getById);
router.post('/', gremioController.create);
router.put('/:id', gremioController.update);
router.delete('/:id', gremioController.delete);
const router = express.Router();


module.exports = router;
