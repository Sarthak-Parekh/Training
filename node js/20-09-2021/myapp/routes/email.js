var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('email');
});

router.post('/', function(req, res, next) {
var t = req.body.email;
var s = req.body.subject;
var te = req.body.text;
var attachmentPath = req.file?.path;




    "use strict";
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
        from: '"shrey" <sshrey0119@gmail.com>', // sender address
        to: t, // list of receivers
        subject: s, // Subject line
        text: te,
        attachments: [
          {
            path: attachmentPath,
          },
        ], // plain text body
         // html body
      });
    
      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    
      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }
    
    main().catch(console.error);
    res.render("e.hbs");
    
  
});

module.exports = router;
