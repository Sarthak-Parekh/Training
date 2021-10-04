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
  var myfile = req.files.file123;
 var myfilename = req.files.file123.name;

  const mybodydata = {
    user_name : req.body.txt1,
    user_gender: req.body.txt2,
    user_email:  req.body.txt3,
    user_password:  req.body.txt4,
    user_joindate:  req.body.txt5,
    
    user_hobby : req.body.txt7,
    
    user_photo : myfilename
  }
 
    
    console.log("File Send Success")
  var data = UserModel(mybodydata);

  data.save(function(err){
    if(err){
      console.log("Error in Add Record" + err);
    }else{
      console.log("Record Added");
      myfile.mv('public/images/'+ myfilename, function(err) {
        if (err)
        throw err;
        res.send('File uploaded!');
        });
      
      // res.redirect("display")
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
  user_gender:req.body.txt2 ,
  user_email: req.body.txt3,
  user_password: req.body.txt4,
  user_joindate: req.body.txt5,
  user_photo : req.body.txt6,
  user_hobby : req.body.txt7
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
  });

module.exports = router;
