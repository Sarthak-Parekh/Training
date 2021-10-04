var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var myschema = new Schema ({
    category : String
    
});
module.exports = mongoose.model('category',myschema);