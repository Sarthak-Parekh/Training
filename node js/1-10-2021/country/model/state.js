var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var myschema = new Schema ({
    State : String
    
});
module.exports = mongoose.model('state',myschema);