var express = require('express');
var router = express.Router();
var proModel = require('../model/pro_model.js');
var cateModel = require('../model/cate_model.js');
/* GET users listing. */
router.get('/', function(req, res, next) {
  cateModel.find(function(err, data) {
    if (err) {
        console.log("Error in Fetch Data " + err);
      } else {
        //Print Data in Console
        console.log(data);
 
  res.render('login/add-pro',{mycate : data});}


});
});


router.post('/', function(req, res, next) {
  var myfile = req.files.file1;
 var myfilename = req.files.file1.name;
 myfile.mv('public/images/'+ myfilename, function(err) {
  if (err)
  throw err;
  // res.send('File uploaded!');
  });
  
  console.log("File Send Success")
    const prodata = {
      Product : req.body.txt1,
      Image: myfilename ,
      Price: req.body.txt2,
  _category : req.body._category
      
    }
    
  
    var data = proModel(prodata);
  
    data.save(function(err){
      if(err){
        console.log("Error in Add Record" + err);
      }else{
        console.log("Record Added");
        res.redirect('/product')
      }
    })
    
  });

  router.get('/display', function(req, res, next) {
    proModel.find(function(err,data){
      console.log(data);
      if(err){
        console.log("Error in Fetch Data" + err);
      }else{
    proModel.find({})
    .populate('_category')
    .exec(function(err,data){
      console.log("Record Data is " + data);
       
      res.render('login/dis-pro',{mydata:data});
    })

      
      }
    }).lean();
  });


  router.get('/delete/:id', function(req, res, next) {
    var deleteid = req.params.id;
    proModel.findByIdAndDelete(deleteid,function(err,data){
      if(err)
      {
        console.log("Error in Delete " + err);
      }else{ 
        console.log("Record Deleted " + deleteid);
        res.redirect('/product/display');
      } 
    })
   
  });


  router.get('/edit/:id', function(req, res, next) {
    var editid = req.params.id;
    proModel.findById(editid,function(err,data){
      if(err){
        console.log("Error in Edit" + err)
      }else{
        console.log(data);
        res.render('login/pro-edit',{mydata:data})
      }
    }).lean();
  
  });


  router.post('/edit/:id', function(req, res, next) {
    var editid = req.params.id;
    const prodata = {
        Product : req.body.txt1,
        }
    proModel.findByIdAndUpdate(editid,prodata,function(err,data){
      if(err){
        console.log("Error in Edit" + err)
      }else{
        console.log( "Record Updated" +  data);
  
        res.redirect('/product/display');
      }
    }).lean();
  
  });



  
module.exports = router;
