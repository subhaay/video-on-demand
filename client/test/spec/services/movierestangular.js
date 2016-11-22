'use strict';

describe('Service: MovieRestangular', function () {

  // load the service's module
  beforeEach(module('videoServiceApp'));

  // instantiate service
  var MovieRestangular;
  beforeEach(inject(function (_MovieRestangular_) {
    MovieRestangular = _MovieRestangular_;
  }));

  it('should do something', function () {
    expect(!!MovieRestangular).toBe(true);
  });

});
