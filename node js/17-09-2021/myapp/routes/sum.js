
const e = require('express');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('sum');
});


router.post('/', function(req, res, next) {  
    var a = parseInt(req.body.text1);
    var b = parseInt(req.body.text2);
   
    var s =a+b;
    res.render('sum1',{sum:s});
    
  });
module.exports = router;
