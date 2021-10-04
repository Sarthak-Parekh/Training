var mongoose = require('mongoose');
const { string } = require('optimist');
var Schema = mongoose.Schema;

var myschema = new Schema({
    user_name : String,
    user_gender: String,
    user_email: String,
    user_password: String,
    user_joindate: {type : Date,default:Date.now},
    user_photo : String,
    user_hobby : String
});
module.exports = mongoose.model('information',myschema);