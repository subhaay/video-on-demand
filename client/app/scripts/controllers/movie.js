'use strict';

/**
 * @ngdoc function
 * @name videoServiceApp.controller:MovieCtrl
 * @description
 * # MovieCtrl
 * Controller of the videoServiceApp
 */
angular.module('videoServiceApp')
  .controller('MovieCtrl', function ($scope) {
    $scope.movie = "https://www.youtube.com/watch?v=JXzswyfFg70";

  });
