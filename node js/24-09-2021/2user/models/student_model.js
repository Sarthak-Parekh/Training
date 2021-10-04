var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var myschema = new Schema({
    user_name:String,
    user_email:String,
    user_en:Number
});
module.exports = mongoose.model('student',myschema);