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
    var host = 'http://localhost:8000/api';
    return {
      all : function() {
        return $http.get(host + '/movie');
      },
      getbyId : function(id) {
        return $http.get(host + '/movie/' + id);
      }
    }
  });
