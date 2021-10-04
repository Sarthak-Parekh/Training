var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/demo', function(req, res, next) {
  res.render('demo', { title: 'Express' });
});
router.get('/dash', function(req, res, next) {
  res.render('dashboard', { title: 'Express' });
});
// router.get('/login', function(req, res, next) {
//   res.render('login');
// });

module.exports = router;
