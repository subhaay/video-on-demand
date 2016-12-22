'use strict';

/**
 * @ngdoc function
 * @name videoServiceApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the videoServiceApp
 */
angular.module('videoServiceApp')
  .controller('LoginCtrl', function ($rootScope, $scope, User, $location, $state) {
    $scope.form = {};
    $scope.errors = [];

    $scope.signIn = function () {
      $scope.errors = [];
      User.getUserByEmail($scope.form.email)
        .then(function (greeting) {
          var data = greeting.data;
          $rootScope.loginEmail = data[0].email;
          if (data[0].password != $scope.form.password) {
            $scope.errors.push("Enter a valid email address and password..");
          } else {
            $rootScope.showSignIn = false;
            $state.go('home');
          }
        }, function (reason) {
          $scope.errors.push(reason.data.toString());
        });
    };

  });
