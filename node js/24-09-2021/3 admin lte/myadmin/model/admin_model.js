var mongoose = require('mongoose');
var Schema =  mongoose.Schema;
var myschema = new Schema({
    user_email : String,
    user_password :Number
});
module.exports = mongoose.model('admin',myschema);