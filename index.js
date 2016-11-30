var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var methodOverride = require('method-override');
var _ = require('lodash');
var db = require('./config/db');

// Create the application.
var app = express();

// Add Middleware necessary for REST API's
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

// CORS Support
app.use(cors());

// Connect to MongoDB
mongoose.connect(db.url);
mongoose.Promise = global.Promise;
mongoose.connection.once('open', function () {

    // Load the models.
    app.models = require('./models/index');

    // Load the routes.
    var routes = require('./routes');

    _.each(routes, function (controller, route) {
        app.use(route, controller);
    });

});


app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/client')); // set the static files location /public/img will be /img for users


app.get('/', function(request, response) {
    response.render('client/index');
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});


