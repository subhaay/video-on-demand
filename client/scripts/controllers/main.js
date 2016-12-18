'use strict';

/**
 * @ngdoc function
 * @name videoServiceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the videoServiceApp
 */
angular.module('videoServiceApp')
  .controller('MainCtrl', function ($rootScope, $scope, $location, Movie, MovieService) {

    $scope.movies = [];
    $scope.errors = [];

    $scope.init = init();

    function init() {
      if($rootScope.loginEmail) {
        MovieService.all()
          .then(function(greeting) {
            $scope.movies = greeting.data;
          }, function(reason) {
            $scope.errors.push(reason.toString());
          });
      } else {
        $scope.errors.push("Please Login before viewing any contents..");
        $location.path('/');
      }
    }

  });
