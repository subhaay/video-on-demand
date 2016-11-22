'use strict';

/**
 * @ngdoc function
 * @name videoServiceApp.controller:MovieCtrl
 * @description
 * # MovieCtrl
 * Controller of the videoServiceApp
 */
angular.module('videoServiceApp')
  .controller('MovieCtrl', function ($scope, $sce, $routeParams, Movie, MovieService) {
    $scope.movie = {};
    $scope.errors = [];

    $scope.init = init();

    function init() {

      MovieService.getbyId($routeParams.id)
        .success(function (data) {
          $scope.movie = data[0];
        })
        .error(function (err) {
          $scope.errors.push(err.toString());
        });
    }

  });
