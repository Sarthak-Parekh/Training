var express = require('express');
var router = express.Router();
var cateModel = require('../model/cate_model.js');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login/add-cate');
});


router.post('/', function(req, res, next) {
  
    const catedata = {
      category : req.body.txt1,
      
    }
    var data = cateModel(catedata);
  
    data.save(function(err){
      if(err){
        console.log("Error in Add Record" + err);
      }else{
        console.log("Record Added");
        res.redirect('/category')
      }
    })
    
  });

  router.get('/display', function(req, res, next) {
    cateModel.find(function(err,data){
      if(err){
        console.log("Error in Fetch Data" + err);
      }else{
        console.log("Record Data is " + data);
       
         res.render('login/dis-cate',{mydata:data});
      }
    }).lean();
  });


  router.get('/delete/:id', function(req, res, next) {
    var deleteid = req.params.id;
    cateModel.findByIdAndDelete(deleteid,function(err,data){
      if(err)
      {
        console.log("Error in Delete " + err);
      }else{ 
        console.log("Record Deleted " + deleteid);
        res.redirect('/category/display');
      } 
    })
   
  });


  router.get('/edit/:id', function(req, res, next) {
    var editid = req.params.id;
    cateModel.findById(editid,function(err,data){
      if(err){
        console.log("Error in Edit" + err)
      }else{
        console.log(data);
        res.render('login/cate-edit',{mydata:data})
      }
    }).lean();
  
  });


  router.post('/edit/:id', function(req, res, next) {
    var editid = req.params.id;
    const catedata = {
        category : req.body.txt1,
        }
    cateModel.findByIdAndUpdate(editid,catedata,function(err,data){
      if(err){
        console.log("Error in Edit" + err)
      }else{
        console.log( "Record Updated" +  data);
  
        res.redirect('/category/display');
      }
    }).lean();
  
  });



  
module.exports = router;
