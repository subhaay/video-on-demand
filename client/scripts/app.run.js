/**
 * Created by avipokhrel on 11/26/16.
 */
angular.module('videoServiceApp').run(runBlock);

/** @ngInject */
function runBlock($rootScope) {
  $rootScope.SERVICE_URL = 'http://localhost:5000/api';
}
