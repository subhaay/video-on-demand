'use strict';
/**
 * Created by avipokhrel on 11/19/16.
 */
angular.module('videoServiceApp')
.filter('trusted', function ($sce) {
  return function(url) {
    return $sce.trustAsResourceUrl(url);
  };
});
