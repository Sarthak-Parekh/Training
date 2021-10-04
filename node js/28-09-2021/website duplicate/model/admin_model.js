var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var myschema = new Schema ({
    user_name : String,
    user_email : String,
    user_password : String,
    user_cpassword :String
   
});
module.exports = mongoose.model('admin',myschema);