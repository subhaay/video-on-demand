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

    app.listen(8000, '0.0.0.0', function () {
        console.log('Listening to port:  ' + 8000);
    });
    /*app.listen(8000);
    console.log('Listening to port:  ' + 8000);*/
});
