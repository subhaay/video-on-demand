'use strict';

/**
 * @ngdoc service
 * @name videoServiceApp.UserService
 * @description
 * # UserService
 * Factory in the videoServiceApp.
 */
angular.module('videoServiceApp').factory('User', ['$http', function ($http) {

  var us = {};

  us.getUserByEmail = function (email) {

    var req = {
      method: 'GET',
      url: '/api/user/' + email
    };

    var promise = $http(req);
    return promise;
  }

  us.createUser = function (user) {
    var req = {
      method: 'POST',
      url: '/api/user',
      data: user
    };

    var promise = $http(req);
    return promise;

  }

 /* return {
    get: function (email) {
      return $http.get('/api/user/' + email);
    },
    create: function (user) {
      return $http.post('/api/user', user);
    }
  }*/

 return us;
}]);
