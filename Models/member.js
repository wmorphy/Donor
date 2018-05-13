var mongoose = require("mongoose");
var schema = mongoose.Schema;

var userSchema = new Schema({
    email:{type: String, required: true},
    password:{type: String, required: true}
});

module.exports= mongoose.model('user',userSchema);