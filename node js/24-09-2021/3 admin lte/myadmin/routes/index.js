var express = require('express');
var router = express.Router();
var adminModel = require('../model/admin_model');

/* GET home page. add data start */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.post('/', function(req, res, next) {

const data = {
  user_email :req.body.txt1,
  user_password : req.body.txt2
}
var admindata = adminModel(data);
admindata.save(function(err){
  if(err){
    console.log('Error in add record'+err);
  }
  else{
    console.log("record added");
    res.redirect('/')
  }
})
});
//add data end 

//display data
router.get('/display', function(req,res,next){
  adminModel.find(function(err,admindata){
    if(err){
      console.log('error in fetch data'+ admindata);
    }
    else{
      console.log('record data is' + admindata);
      res.render('table',{mydata:admindata})
    }
  })
});

//delete data
router.get('/delete/:id',function(req,res,next){
  var deleteid = req.params.id;
  adminModel.findByIdAndDelete(deleteid,function(err,admindata){
    if(err){console.log("Error in data"+err);}
    else{
      console.log("record data"+deleteid);
      res.redirect('/display');
    }
  })
});


router.get('/edit/:id', function(req, res, next) {
  var editid = req.params.id;
  adminModel.findById(editid,function(err,admindata){
    if(err){
      console.log("Error in Edit" + err)
    }else{
      console.log(admindata);
      res.render('edit',{mydata:admindata})
    }
  }).lean();

});



router.post('/edit/:id', function(req, res, next) {
  var editid = req.params.id;
  const data = {
    user_email : req.body.txt1,
    user_password : req.body.txt2
  }

  adminModel.findByIdAndUpdate(editid,data,function(err,admindata){
    if(err){
      console.log("Error in Edit" + err)
    }else{
      console.log( "Record Updated" +  admindata);

      res.redirect('/display');
    }
  }).lean();

});







module.exports = router;
