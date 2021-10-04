var express = require('express');
const app = require('../app');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res){
  
  if(req.session.page_views){
     req.session.page_views++;
     res.cookie('counter',req.session.page_views);
     res.send("You visited this page " + req.session.page_views + " times");
  } else {
     req.session.page_views = 1;
     res.send("Welcome to this page for the first time!");
     
    //  res.cookie('name', 'express').send(req.session.page_views);
    //  console.log(req.cookie);
  }
});
router.get('/login',function(req,res){
  res.clearCookie('counter');
  res.render('login');
});

router.post('/home',function(req,res){
  var a= req.body.username;
  console.log(a);
  res.cookie('user', a ,{maxAge:360000});
  req.session.username = a;
  if(req.session.username)
  {  
    res.render('home');
  }
  else{
  res.send('login required');}
});
router.get('/home',function(req, res, next){
  res.clearCookie('counter');
  if(req.session.username)
  {
    
    res.render('home');
  }
  else{
    res.redirect('/login');
  }
});
router.get('/logout',function(req,res,next){
  res.clearCookie('counter');
  req.session.destroy(function(err){
    res.clearCookie('user');
    res.redirect('/login');
   
  })
});

router.get('/color',function(req,res,next){
  res.clearCookie('counter');
  res.render('color');
});
router.post('/home1',function(req,res,next){
  
  var a = req.body.n;
  res.cookie('color',a);
  console.log(a);
  res.redirect('/home1');
 
  
});
router.get('/home1',function(req,res,next){
  var b = req.cookies.color;
  console.log(b);
   res.render('home1',{title:b});
});

 
module.exports = router;
