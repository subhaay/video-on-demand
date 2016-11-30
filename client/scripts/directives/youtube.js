/**
 * Created by avipokhrel on 11/19/16.
 */
angular.module('videoServiceApp')
  .directive('youtube', function() {
  return {
    restrict: 'E',
    scope: {
      src: '='
    },
    templateUrl: 'views/youtube.html'
  };
})
