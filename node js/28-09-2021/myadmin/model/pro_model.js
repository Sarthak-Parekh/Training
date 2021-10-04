var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var myschema = new Schema ({
    Product : String,
    Image: String,
    Price: Number
    
});
module.exports = mongoose.model('product',myschema);