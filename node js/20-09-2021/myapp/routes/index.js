var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/signup', function(req, res, next) {
  res.render('signup');
});
// router.get('/email', function(req, res, next) {
//   res.render('email');
// });

router.post('/signup', function(req, res, next) {

  var a = req.body.username;
  var b = req.body.email;
  var c = req.body.password;
  var d = req.body.mobile;
  var e = req.body.gender;

  const nodemailer = require("nodemailer");
  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();
  
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "sshrey0119@gmail.com", // generated ethereal user
        pass: "Shrey@0119", // generated ethereal password
      },
    });
  
    
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: " sshrey@0119@gmail.com", 
      to: b, // list of receivers
      subject: "Information", // Subject line
      text: "information", // plain text body
      html:`<html>
      <body>
          <table border = "1px">
          <tr>
          <td style = "color:blue" colspan=2><center>Information</center></td>
          </tr>
              <tr>
                  <th> Name</th>
                 <td>`+a+`</td>
              </tr>
             
              <tr>
                  <th> E-mail</th>
                 <td>`+b+`</td>
              </tr>
              <tr>
                  <th>Password</th>
                 <td>`+c+`</td>
              </tr>
              
              <tr>
                  <th>Phone Number</th>
                 <td>`+d+`</td>
              </tr>
              <tr>
              <th>Gender</th>
             <td>`+e+`</td>
          </tr>
             
          </table>
      </body>
  </html>`, // html body
    });
    res.render("thank.hbs");
   
  }
  
  main().catch(console.error);
  






  
  
});

module.exports = router;
