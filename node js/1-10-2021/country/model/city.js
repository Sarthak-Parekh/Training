var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var myschema = new Schema ({
    Product : String,
    _state:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'state'
    }
    
});
module.exports = mongoose.model('city',myschema);