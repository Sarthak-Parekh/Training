var express = require('express');
var router = express.Router();
var UserModel = require('../models/user_model');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/add', function(req, res, next) {
  res.render('add');
});
router.post('/add', function(req, res, next) {

const mydata = {
  user_name:req.body.txt1,
  user_age:req.body.txt2,
  user_mobile:req.body.txt3
}
     var data = UserModel(mydata);

     data.save(function(err){
       if(err){
         console.log("Error"+err);
       }
       else{
         console.log("record add");
         res.redirect('display');
       }
     })
});
router.get('/display',function(req,res,next){
UserModel.find(function(err,data){
  if(err)
  {
    console.log("err for display"+ err);
  }
  else{
    console.log("record data is"+ data);
    res.render('display',{mydata:data});
  }
}).lean();

});
router.get('/delete/:id',function(req,res,next){
  var deleteid = req.params.id;
  UserModel.findByIdAndDelete(deleteid,function(err,data){
    if(err)
    {
      console.log("err for delete"+ err);
    }
    else{
      console.log("record deleted "+ deleteid);
      res.redirect('/display');
    }
  })
  });

  router.get('/edit/:id', function(req,res,next)
  {
    var editid = req.params.id;
    UserModel.findById(editid , function(err,data){
      if(err){
        console.log("err in edit" + err)
      }
      else{
        console.log(data);
        res.render('edit',{mydata:data})
      }
    }).lean();
  });
 
  router.post('/edit/:id', function(req,res,next){
    var editid = req.params.id;
    const mydata = {
      user_name:req.body.txt1,
      user_age:req.body.txt2,
      user_mobile:req.body.txt3
    }
    UserModel.findByIdAndUpdate(editid,mydata,function(err,data){
      if(err)
      {
        console.log(err)
      }
      else{
        console.log(data);
        res.redirect('/display');
      }
    }).lean();
  })








module.exports = router;
