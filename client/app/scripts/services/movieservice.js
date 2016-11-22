'use strict';

/**
 * @ngdoc service
 * @name videoServiceApp.MovieService
 * @description
 * # MovieService
 * Factory in the videoServiceApp.
 */
angular.module('videoServiceApp')
  .factory('MovieService', function ($http) {
    var host = 'http://10.0.1.110:8000';
    return {
      all : function() {
        return $http.get(host + '/movie');
      },
      getbyId : function(id) {
        return $http.get(host + '/movie/', id);
      }
    }
  });
