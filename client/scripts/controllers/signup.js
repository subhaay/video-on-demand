'use strict';

/**
 * @ngdoc function
 * @name videoServiceApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the videoServiceApp
 */
angular.module('videoServiceApp')
  .controller('SignupCtrl', function ($scope, $state, User, $location) {
    $scope.form = {};
    $scope.errors = [];

    $scope.signUp = function () {
      $scope.errors = [];
      var user = {
        "email" : $scope.form.email,
        "password": $scope.form.password
      };

      User.createUser(user)
        .then(function(greeting) {
          $state.go('login');
        }, function(reason) {
          $scope.errors.push(reason.toString());
        });
    };

    $scope.passwordValidator = function(password) {

      if(!password){return;}

      if (password.length < 6) {
        return "Password must be at least " + 6 + " characters long";
      }

      if (!password.match(/[A-Z]/)) {
        return "Password must have at least one capital letter";
      }

      if (!password.match(/[0-9]/)) {
        return "Password must have at least one number";
      }

      return true;
    };
  });
