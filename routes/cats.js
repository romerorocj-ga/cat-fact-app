var express = require('express');
var router = express.Router();
const catsCtrl = require('../controllers/cats')

router.get('/fact', catsCtrl.fact)

module.exports = router;
