'use strict';
/**
 * Created by avipokhrel on 11/26/16.
 */
angular.module('videoServiceApp').config(config);
/** @ngInject */
function config($qProvider) {
  $qProvider.errorOnUnhandledRejections(false);
}
