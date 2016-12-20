'use strict';

/**
 * @ngdoc overview
 * @name videoServiceApp
 * @description
 * # videoServiceApp
 *
 * Main module of the application.
 */
angular
  .module('videoServiceApp', [
    "ngSanitize", "ui.router", 'angularValidator',
    "com.2fdevs.videogular",
    "com.2fdevs.videogular.plugins.controls",
    "com.2fdevs.videogular.plugins.overlayplay",
    "com.2fdevs.videogular.plugins.poster",
    'com.benjipott.videogular.plugins.chromecast'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider

      .state('login', {
        url: '/',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .state('home', {
        url: '/home',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',

      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl',
        controllerAs: 'signup'
      })
      .state('categories', {
        url: '/categories',
        templateUrl: 'views/categories.html',
        controller: 'CategoriesCtrl',
        controllerAs: 'categories'
      })
      .state('movie', {
        url: '/movie?movieId',
        templateUrl: 'views/movie.html',
        controller: 'MovieCtrl',
        controllerAs: 'movie'
      });

    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  });
