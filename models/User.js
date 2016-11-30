/**
 * Created by avipokhrel on 11/26/16.
 */
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    password: {
        type: String,
        required: true},
    email: {
        type: String,
        required: true}
});
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('user', UserSchema);

