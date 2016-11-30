/**
 * Created by avipokhrel on 11/26/16.
 */
var express = require('express');
var router = express.Router();

var user = require('./User.js');

/* GET /user listing. */
router.get('/', function(req, res, next) {
    user.find(function (err, users) {
        if (err) return next(err);
        console.log("Users: " + users.toString());
        res.json(users);
    });
});

/* GET /user/id */
router.get('/:email', function(req, res, next) {
    if (req.params.email) {
        user.find({ email: req.params.email }, function (err, docs) {
            res.json(docs);
        });
    }
});

/* POST /users */
router.post('/', function(req, res) {
    var newUser = new user(req.body);
    // save the user and check for errors
    newUser.save(function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'New User created!' });
    });

});



module.exports = router;
