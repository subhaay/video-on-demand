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
          .success(function (data) {
            $scope.movies = data;
          })
          .error(function (err) {
            $scope.errors.push(err.toString());
          });
      } else {
        $scope.errors.push("Please Login before viewing any contents..");
        $location.path('/');
      }
    }

  });
