'use strict';

describe('Filter: mstohhmmss', function () {

  // load the filter's module
  beforeEach(module('videoServiceApp'));

  // initialize a new instance of the filter before each test
  var mstohhmmss;
  beforeEach(inject(function ($filter) {
    mstohhmmss = $filter('mstohhmmss');
  }));

  it('should return the input prefixed with "mstohhmmss filter:"', function () {
    var text = 'angularjs';
    expect(mstohhmmss(text)).toBe('mstohhmmss filter: ' + text);
  });

});
