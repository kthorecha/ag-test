var express = require('express');
var router = express.Router();
const verify = require('../config/verifyToken');

/* GET home page. */
router.get('/', verify, function(req, res, next) {
  console.log('sesss',req)
  res.render('index', { title: 'Express' });
});

module.exports = router;
