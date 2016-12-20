'use strict';

/**
 * @ngdoc directive
 * @name videoServiceApp.directive:navBar
 * @description
 * # navBar
 */
angular.module('videoServiceApp')
  .directive('navBar', function () {
    return {
      templateUrl: 'views/navBar.html',
      restrict: 'E',
      controller: NavbarController,
      controllerAs: 'nbc'
    };
    /** @ngInject */
    function NavbarController($scope, $rootScope, $location, $state) {
      var vm = this;
      if ($rootScope.loginEmail) {
        $rootScope.showSignIn = false;
      }
      else {
        $rootScope.showSignIn = true;

      }

      vm.init = init();
      function init() {
        $rootScope.showSignIn = true;
      }

      $scope.checkout = function() {
        $rootScope.loginEmail = undefined;
        $rootScope.showSignIn = true;
        $state.go('login');
      }

      init();
    }

  });
