var express = require('express');
var router = express.Router();

var movie = require('../models/Movie.js');

/* GET /item listing. */
router.get('/', function(req, res, next) {
  console.log('calling movie all service..');
  movie.find(function (err, movies) {
    if (err) return next(err);
    res.json(movies);
  });
});


router.get('/:id', function(req, res, next) {
  console.log('the request param is ' + req.params.id);
  movie.findById(req.params.id , function (err, doc){
    res.json(doc);
  });
});


/* POST /items */
router.post('/', function(req, res) {
  var newMovie = new movie();
  newMovie.title = req.body.title;
  newMovie.sources = req.body.sources;
  newMovie.tracks = req.body.tracks;
  newMovie.theme = req.body.theme;
  newMovie.plugins = req.body.plugins;
  newMovie.thumbnail = req.body.thumbnail;

  // save the user and check for errors
  newMovie.save(function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'New movie was successfully added to the collection..' });
  });

});



module.exports = router;
