'use strict';

/**
 * @ngdoc function
 * @name videoServiceApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the videoServiceApp
 */
angular.module('videoServiceApp')
  .controller('LoginCtrl', function ($rootScope, $scope, User, $location) {
    $scope.form = {};
    $scope.errors = [];

    $scope.signIn = function () {

      $location.path('home');

      $scope.errors = [];
      /*User.get($scope.form.email)
        .success(function (data) {
          $rootScope.loginEmail = data[0].email;
          if(data[0].password != $scope.form.password) {
            $scope.errors.push("Enter a valid email address and password..");
          } else {
            $rootScope.showSignIn = false;
            $location.path('home');
          }
        })
        .error(function (err) {
          $scope.errors.push(err.toString());
        });*/
    };

  });
