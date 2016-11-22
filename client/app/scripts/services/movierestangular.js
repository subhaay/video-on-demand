'use strict';

/**
 * @ngdoc service
 * @name videoServiceApp.MovieRestangular
 * @description
 * # MovieRestangular
 * Factory in the videoServiceApp.
 */
angular.module('videoServiceApp')
  .factory('MovieRestangular', function(Restangular) {
  return Restangular.withConfig(function(RestangularConfigurer) {
    RestangularConfigurer.setRestangularFields({
      id: '_id'
    });
  });
})
