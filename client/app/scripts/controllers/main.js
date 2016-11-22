'use strict';

/**
 * @ngdoc function
 * @name videoServiceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the videoServiceApp
 */
angular.module('videoServiceApp')
  .controller('MainCtrl', function ($scope, Movie, MovieService) {

    $scope.movies = [];
    $scope.errors = [];

    $scope.init = init();

    function init() {
      MovieService.all()
        .success(function (data) {
          $scope.movies = data;
        })
        .error(function (err) {
          $scope.errors.push(err.toString());
        });
    }

  });
