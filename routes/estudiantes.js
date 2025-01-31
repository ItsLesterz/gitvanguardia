routes/estudiantes
var router = require('express').Router();
const estudiantesController = require('../controllers/estudiantesController');
router.get('/', estudiantesController.getAllEstudiantes);

module.exports = routes;