'use strict';

/**
 * @ngdoc service
 * @name videoServiceApp.UserService
 * @description
 * # UserService
 * Factory in the videoServiceApp.
 */
angular.module('videoServiceApp').factory('User', ['$http', function($http) {
  var host = 'http://localhost:8000/api';
  return {
    get : function(email) {
      return $http.get(host + '/user/' + email);
    },
    create : function(user) {
      return $http.post(host + '/user', user);
    }
  }

}]);
