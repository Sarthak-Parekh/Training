var express = require('express');
var router = express.Router();
var adminModel = require('../model/admin_model.js');
/* GET home page. */

//signup page start
router.get('/signup', function (req, res, next) {
  res.render('admin/signup');
});

router.post('/signup', function (req, res, next) {
  console.log(req.body);
  const signdata = {
    user_name: req.body.cr_user,
    user_email: req.body.cr_email,
    user_password: req.body.cr_pass,
    user_cpassword: req.body.cr_cpass
  }
  var sign = adminModel(signdata);
  sign.save(function (err) {
    if (err) {
      console.log("error in signup" + err);
    }
    else {
      res.redirect('/admin');
    }
  })
});
//signup end


//login start 
router.get('/', function (req, res, next) {
  res.render('admin/login');
});

router.post('/', function (req, res, next) {
  var email = req.body.cr_email;
  var password = req.body.cr_pass;
  console.log(req.body);
  adminModel.findOne({ "user_email": email }, function (err, db_users_array) {
    console.log("find one" + db_users_array);
    if (db_users_array) {
      var db_email = db_users_array.user_email;
      var db_password = db_users_array.user_password;
    }
    console.log("db_users_array.user_email" + db_email);
    console.log("db_users_array.user_password" + db_password);
    if (db_email == null) {
      console.log("if");
      res.end("email not found");
    }
    else if (db_email == email && db_password == password) {
      req.session.email = db_email;
      res.redirect('admin/home');
    }
    else {
      console.log("wrong");
      res.end("login invalid");
    }
  });
});
//login ends
//home
router.get('/home', function (req, res, next) {
  console.log("home");
  var myemail = req.session.email;
  console.log(myemail);

  if (!req.session.email) {
    console.log("name is set");
    res.end("login page require");
  } else {
    res.render('admin/home');
  }
});
//end of home



// start change password

router.get('/change-password', function (req, res, next) {
  if (!req.session.email) {
    console.log("email is set in change");
    res.redirect('/admin');
  }
  res.render('admin/change-password');
});

router.post('/change-password', function (req, res, next) {
  if (!req.session.email) {
    console.log("name Session is Set");
    res.redirect('/admin');
  }
  console.log("Home Called " + req.session.email);
  var myemail = req.session.email;
  var opass = req.body.opass;
  var npass = req.body.npass;
  var cpass = req.body.cpass;

  adminModel.findOne({ "user_email": myemail }, function (err, db_users_array) {

    if (err) {
      console.log("Error in Old Password Fetch " + err);
    } else {
      console.log(db_users_array);


      if (opass == db_users_array.user_password) {

        if (opass == npass) {
          res.end("New Password Must be Different then Old password");
        } else {

          if (npass == cpass) {

            adminModel.findOneAndUpdate({ "user_email": myemail }, { $set: { "user_password": npass, "user_cpassword": cpass } }, function (err) {

              if (err) {
                res.end("Error in Update" + err);
              } else {

                res.redirect("/admin");
              }

            });



          } else {
            res.end("New Password and Confirm Password not match");
          }

        }

      } else {
        res.end("Old Password Not Match");
      }


    }


  });
});
//end of change password 


router.get('/logout', function (req, res) {

  req.session.destroy();
  res.redirect("/admin");
});

router.get('/forgot-password', function (req, res, next) {
  res.render('admin/forgot-password');
});



//forgot  Process  Method
router.post('/forgot-password', function (req, res, next) {

  var email = req.body.user_email;

  console.log(req.body);
  adminModel.findOne({ "user_email": email }, function (err, db_users_array) {

    console.log("Find One " + db_users_array);

    if (db_users_array) {
      var db_email = db_users_array.user_email;
      var db_password = db_users_array.user_password;

    }

    console.log("db_users_array.user_email " + db_email);
    console.log("db_users_array.user_password " + db_password);

    if (db_email == null) {
      console.log("If");
      res.end("Email not Found");
    }
    else if (db_email == email) {




      "use strict";
      const nodemailer = require("nodemailer");

      // async..await is not allowed in global scope, must use a wrapper
      async function main() {

        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        let account = await nodemailer.createTestAccount();

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 587,
          secure: false, // true for 465, false for other ports
          auth: {
            user: "sshrey0119@gmail.com", // generated ethereal user
            pass: "Shrey@0119" // generated ethereal password
          }
        });

        // setup email data with unicode symbols
        let mailOptions = {
          from: 'sshrey0119@gmail.com', // sender address
          to: email, // list of receivers
          subject: "Forgot Password", // Subject line
          text: "Hello your password is " + db_password, // plain text body
          html: "Hello your password is " + db_password // html body
        };

        // send mail with defined transport object
        let info = await transporter.sendMail(mailOptions)

        console.log("Message sent: %s", info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

        res.end("Password Sent on your Email");
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
      }

      main().catch(console.error);



    }
    else {
      console.log("Credentials wrong");
      res.end("Login invalid");
    }


  });
});





















module.exports = router;
