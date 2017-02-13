var express = require('express');
var router = express.Router();
var randomstring = require("randomstring");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {title: 'Express', randomUserRefPrefix: randomstring.generate()});
});

module.exports = router;
