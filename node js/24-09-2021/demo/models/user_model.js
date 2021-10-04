var mongoose = require('mongoose');
const { string } = require('optimist');
var Schema = mongoose.Schema;

var myschema = new Schema({
    user_name : String,
    user_age:Number,
    user_mobile:Number
});
module.exports = mongoose.model('users',myschema);