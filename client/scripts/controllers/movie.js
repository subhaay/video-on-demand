'use strict';

/**
 * @ngdoc function
 * @name videoServiceApp.controller:MovieCtrl
 * @description
 * # MovieCtrl
 * Controller of the videoServiceApp
 */
angular.module('videoServiceApp')
  .controller('MovieCtrl', function ($rootScope, $scope, $state, $sce, $stateParams, MovieService) {
    $scope.movie = {};
    $scope.errors = [];

    $scope.init = init();

    function init() {

      if($rootScope.loginEmail) {
        MovieService.getbyId($stateParams.movieId)
          .then(function(greeting) {
            $scope.movie = greeting.data;
          }, function(reason) {
            $scope.errors.push(reason.data.toString());
          });
      } else {
        $scope.errors.push("Please Login before viewing any contents..");
        $state.go('login');
      }

    }

  });
