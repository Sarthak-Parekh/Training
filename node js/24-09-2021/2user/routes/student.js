var express = require('express');
var router = express.Router();
var StudentModel = require('../models/student_model');

/* GET users listing. */
router.get('/add', function(req, res, next) {
  res.render('student/add');
});
router.post('/add', function(req, res, next) {
  const studentdata = {
    user_name : req.body.txt1,
    user_email : req.body.email,
    user_en:req.body.en
  }
  var student = StudentModel(studentdata);
  student.save(function(err){
    if(err){
      console.log("Error in Add"+err);
    }
    else{
      console.log("record added");
      res.redirect('/student/add')
    }
  })
});

  router.get('/display',function(req,res,next){
    StudentModel.find(function(err,student){
      if(err){
        console.log('Error in display'+ student);
      }
      else{
        console.log("record data is" + student);
        res.render('student/display',{studentdata:student});
      }
    }).lean();
  });

  router.get('/delete/:id',function(req,res,next){
    var deletesid = req.params.id;
    StudentModel.findByIdAndDelete(deletesid,function(err,student){
      if(err){
        console.log("error in delete" + err);
      }
      else{
        console.log("record delete" + deletesid);
        res.redirect('/student/display');
      }
    })

  });

  router.get('/edit/:id',function(req,res,next){
    var editsid = req.params.id;
    StudentModel.findById(editsid,function(err,student){
      if(err){
        console.log("error in edit"+err)
      }
      else{
        console.log(student);
        res.render('student/edit',{studentdata:student})
      }
    }).lean();
  });

  router.post('/edit/:id',function(req,res,next){
    var editsid = req.params.id;
    const studentdata = {
      user_name : req.body.txt1,
      user_email : req.body.email,
      user_en:req.body.en
    }
    StudentModel.findByIdAndUpdate(editsid,studentdata,function(err,student){
      if(err){
        console.log("error in edit" + err)
      }
      else{
        console.log("record update" + student);
        res.redirect('/student/display');
      }
    }).lean();

  });


module.exports = router;
