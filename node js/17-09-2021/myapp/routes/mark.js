
const e = require('express');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('mark');
});


router.post('/', function(req, res, next) {  
    var a = parseInt(req.body.text1);
    var b = parseInt(req.body.text2);
    var c = parseInt(req.body.text3);
    var d = parseInt(req.body.text4);
    var e= parseInt(req.body.text5);
    var s =a+b+c+d+e;
    var a= s/5;
    if(a>=90)
    { msg = "A grade"}
    if(a>=75 && a<90)
    { msg = "B grade"}
    if(a>=60 && a<75)
    { msg = "C grade"}

    if(a>=34 && a<60)
    { msg = "D grade"}
    if(a<33)
    { msg = "F grade"}

    res.render('mark1',{sum:s,avg:a, mymsg :msg });
    
  });
module.exports = router;
