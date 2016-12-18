'use strict';

/**
 * @ngdoc service
 * @name videoServiceApp.MovieService
 * @description
 * # MovieService
 * Factory in the videoServiceApp.
 */
angular.module('videoServiceApp')
  .factory('MovieService', ['$http', function ($http) {
    return {
      all : function() {
        return $http.get('/api/movie');
      },
      getbyId : function(id) {
        return $http.get('/api/movie/' + id);
      }
    }
  }]);
