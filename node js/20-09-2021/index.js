var express = require('express');
var fs = require('fs')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

// router.get('/formprocess', function(req, res, next) {
//   var a = req.body.name;
//   var b = req.body.lastname;
//   var c = req.body.email;
//   var d = req.body.phno;
//   var e = req.body.password;
//   var f = req.body.gender;
//   res.render('index' , {name:a,lastname:b,email:c,phno:d,password:e,gender:d})
// });

router.post('/formprocess', function(req, res, next) {
  
  var a = req.body.name;
    var b = req.body.lastname;
    var c = req.body.email;
    var d = req.body.phno;
    var e = req.body.password;
    var f = req.body.gender;
    
  
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
      user: "pr3380611@gmail.com", // generated ethereal user
      pass: "Dixit@000", // generated ethereal password
    },
  });

  

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: " pr3380611@gmail.com", 
    to: "dixitchotaliya05@gmail.com", // list of receivers
    subject: "Form data", // Subject line
    text: "Data", // plain text body
    html:`<html>
    <body style="background-color: lightblue;">
        <table>
            <tr>
                <th> Name</th>
               <td>`+a+`</td>
            </tr>
            <tr>
                <th> Last Name</th>
               <td>`+b+`</td>
            </tr>
            <tr>
                <th> E-mail</th>
               <td>`+c+`</td>
            </tr>
            <tr>
                <th>Password</th>
               <td>`+e+`</td>
            </tr>
            <tr>
                <th>Gender</th>
               <td>`+f+`</td>
            </tr>
            <tr>
                <th>Phone Number</th>
               <td>`+d+`</td>
            </tr>
        </table>
    </body>
</html>`, // html body
  });
  res.send("Form Submitted")
 
}

main().catch(console.error);

});

module.exports = router;
