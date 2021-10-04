var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/about', function(req, res, next) {
  res.render('about');
});
router.get('/photo', function(req, res, next) {
  res.render('photo');
});
router.get('/contact', function(req, res, next) {
  res.render('contact');
});

module.exports = router;
