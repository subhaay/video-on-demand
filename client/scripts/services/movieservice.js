'use strict';

/**
 * @ngdoc service
 * @name videoServiceApp.MovieService
 * @description
 * # MovieService
 * Factory in the videoServiceApp.
 */
angular.module('videoServiceApp')
  .factory('MovieService', ['$http', '$rootScope', function ($http, $rootScope) {
    var host = $rootScope.SERVICE_URL;
    return {
      all : function() {
        return $http.get('/api/movie');
      },
      getbyId : function(id) {
        return $http.get('/api/movie/' + id);
      }
    }
  }]);
