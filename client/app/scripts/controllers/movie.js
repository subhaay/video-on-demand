'use strict';

/**
 * @ngdoc function
 * @name videoServiceApp.controller:MovieCtrl
 * @description
 * # MovieCtrl
 * Controller of the videoServiceApp
 */
angular.module('videoServiceApp')
  .controller('MovieCtrl', function ($scope, $sce) {

    $scope.movie = "https://www.youtube.com/watch?v=JXzswyfFg70";

    $scope.config = {
      sources: [
        {src: "media/movie.mp4", type: "video/mp4"},
        {src: "media/movie.webm", type: "video/webm"},
        {src: "media/movie.ogg", type: "video/ogg"}
      ],
      tracks: [
        {
          src: "http://www.videogular.com/assets/subs/pale-blue-dot.vtt",
          kind: "subtitles",
          srclang: "en",
          label: "English",
          default: ""
        }
      ],
      theme: "bower_components/videogular-themes-default/videogular.css",
      plugins: {
        poster: "media/movie.png"
      }
    };

  });
