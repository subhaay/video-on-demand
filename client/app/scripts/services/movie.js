'use strict';

/**
 * @ngdoc service
 * @name videoServiceApp.Movie
 * @description
 * # Movie
 * Factory in the videoServiceApp.
 */
angular.module('videoServiceApp')
  .factory('Movie', function(MovieRestangular) {
  return MovieRestangular.service('movie');
});
