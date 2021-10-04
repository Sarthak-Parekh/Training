var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('signup');
});


router.post('/', function(req, res, next) {
    var a = req.body.username;
    var c =req.body.email;
    var b = parseInt(req.body.password);
    var d = parseInt(req.body.confirm);
   
    res.render('signup1', {username: a ,email:c, password: b ,confirm :d});
  
  });
module.exports = router;
