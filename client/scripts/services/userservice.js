'use strict';

/**
 * @ngdoc service
 * @name videoServiceApp.UserService
 * @description
 * # UserService
 * Factory in the videoServiceApp.
 */
angular.module('videoServiceApp').factory('User', ['$http', '$rootScope', function($http, $rootScope) {
  var host = $rootScope.SERVICE_URL;
  return {
    get : function(email) {
      return $http.get('/api/user/' + email);
    },
    create : function(user) {
      return $http.post('/api/user', user);
    }
  }

}]);
