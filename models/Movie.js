var mongoose = require('mongoose');

// Create the MovieSchema.
var MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: false
    },
    sources: {
        type: Array,
        'default': []},
    tracks: {
        type: Array,
        'default': []},
    theme : {
        type: String
    },
    plugins : {
        type: {poster: String}
    }

});

// Export the model.
module.exports = mongoose.model('movie', MovieSchema);
