/**
 * Created by avipokhrel on 11/26/16.
 */
angular.module('videoServiceApp').run(runBlock);

/** @ngInject */
function runBlock($rootScope) {
  $rootScope.SERVICE_URL = 'http://10.0.1.110:8000/api';
}
