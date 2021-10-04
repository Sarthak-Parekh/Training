var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var myschema = new Schema ({
    user_email : String,
    user_password : String
});
module.exports = mongoose.model('login info',myschema);