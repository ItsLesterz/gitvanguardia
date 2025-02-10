var express = require('express');
var router = express.Router();

const gremioCtrl = require("../controllers/gremio") ;

router.post('/add',gremioCtrl.AddGremio);
router.get('/get',gremioCtrl.getGremio);
router.put('/update',gremioCtrl.updateName);
router.put('/delete',gremioCtrl.deleteGremio);

module.exports = router;