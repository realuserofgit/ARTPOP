'use strict';

describe('Service: artPop', function () {

  // load the service's module
  beforeEach(module('artpopApp'));

  // instantiate service
  var artPop;
  beforeEach(inject(function (_artPop_) {
    artPop = _artPop_;
  }));

  it('should do something', function () {
    expect(!!artPop).toBe(true);
  });

});
