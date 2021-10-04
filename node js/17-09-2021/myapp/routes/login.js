var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login');
});


router.post('/', function(req, res, next) {
    var a = req.body.username;
    var b = parseInt(req.body.password);
    if(a == "admin" && b == "1234"){
    res.render('login1', {username: a , password: b});}
    else{
        res.render('error1');
    }
  });
module.exports = router;
