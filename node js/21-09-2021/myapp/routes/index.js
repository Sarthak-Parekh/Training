var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sarthak' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Sarthak' });
});
router.get('/form', function(req, res, next) {
 res.render('form');
});
// router.post('/form', function(req, res, next) {
//   console.log(req.files.file1);
// });
router.post('/form', function(req, res, next) {
  var fileobject = req.files.file1;
  var filename = req.files.file1.name;
  var filemime = req.files.file1.mimetype;
  var filesize = req.files.file1.size;
 
    if(filemime == "image/jpeg" && filesize< 2*1024*1024)
    {
      fileobject.mv('public/' + filename,function(err){
      if(err)
      return res.status(500).send(err);
      res.send('File upload');
       });
    }
    else{
      res.send("file not upload");
    }
  });
module.exports = router;
