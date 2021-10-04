var express = require('express');
var router = express.Router();
var UserModel = require('../models/user_model');

/* GET users listing. */
router.get('/add', function(req, res, next) {
  res.render('user/add');
});
router.post('/add', function(req, res, next) {
  const userdata = {
    user_name : req.body.txt1,
    user_email:req.body.email
  }

  var user = UserModel(userdata);

  user.save(function(err){
    if(err){
      console.log("Error in add record" + err);
    }
    else{
      console.log('record add');
      res.redirect('/users/add')
    }
  })
});



router.get('/display',function(req,res,next){
  UserModel.find(function(err,user){
    if(err){
      console.log("Error in display" + err);
    }
    else{
      console.log("Record display"+ user);
      res.render('user/display',{userdata:user})
    }
  }).lean();
});

router.get('/delete/:id',function(req,res,next){
  var deleteuid = req.params.id;
  UserModel.findByIdAndDelete(deleteuid,function(err,user){
    if(err){
      console.log("Error in delete"+ err);
    }
    else{
      console.log('delete' + deleteuid);
      res.redirect('/users/display');
    }

  })
});
router.get('/edit/:id',function(req,res,next){
var edituid = req.params.id;
UserModel.findById(edituid,function(err,user){
  if(err){
    console.log("Error in edit" + err)
  }
  else{
    console.log(user);
    res.render('user/edit',{userdata:user})
  }
}).lean();
});
   router.post('/edit/:id',function(req,res,next){
     var edituid = req.params.id;
     const userdata = {
      user_name : req.body.txt1,
      user_email:req.body.email
    }
    UserModel.findByIdAndUpdate(edituid,userdata,function(err,user){
      if(err){
        console.log("error in edit"+err)
      }
      else{
        console.log("record edit" + user)
        res.redirect('/users/display');
      }
    }).lean();

   });

   

module.exports = router;
