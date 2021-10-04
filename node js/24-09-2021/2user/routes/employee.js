var express = require('express');
var router = express.Router();
var EmployeeModel = require('../models/employee_model');

/* GET users listing. */
router.get('/add', function(req, res, next) {
  res.render('employee/add');
});
router.post('/add', function(req, res, next) {

  const employeedata = {
    user_name : req.body.txt1,
    user_email : req.body.email
  }
  var employee = EmployeeModel(employeedata);
  employee.save(function(err){
    if(err){
      console.log("Error in Add"+err);
    }
    else{
      console.log("record add");
      res.redirect('/employee/add')
    }
  })
});


router.get('/display',function(req,res,next){
  EmployeeModel.find(function(err,employee){
    if(err){
      console.log('Error in display'+ employee);
    }
    else{
      console.log("record data is" + employee);
      res.render('employee/display',{employeedata:employee});
    }
  }).lean();
});

router.get('/delete/:id',function(req,res,next){
  var deleteeid = req.params.id;
  EmployeeModel.findByIdAndDelete(deleteeid,function(err,employee){
    if(err){
      console.log("error in delete" + err);
    }
    else{
      console.log("record delete" + deleteeid);
      res.redirect('/employee/display');
    }
  })
});

router.get('/edit/:id',function(req,res,next){
  var editeid = req.params.id;
  EmployeeModel.findById(editeid,function(err,employee){
    if(err){
      console.log("error in edit"+err)
    }
    else{
      console.log(employee);
      res.render('employee/edit',{employeedata:employee})
    }
  }).lean();
});

router.post('/edit/:id',function(req,res,next){
  var editeid = req.params.id;
  const employeedata = {
    user_name : req.body.txt1,
    user_email : req.body.email
  }
  EmployeeModel.findByIdAndUpdate(editeid,employeedata,function(err,employee){
    if(err){
      console.log("error in edit" + err)
    }
    else{
      console.log("record update" + employee);
      res.redirect('/employee/display');
    }
  }).lean();

});


module.exports = router;
