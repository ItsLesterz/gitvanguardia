var router = require('express').Router();
const estudiantesCtrl = require('../controllers/estudiantes');
router.get('/', estudiantesCtrl.getAllEstudiantes);

module.exports = router;    