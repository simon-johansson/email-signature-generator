'use strict';

describe('Directive: textSelection', function () {

  // load the directive's module
  beforeEach(module('screenSignaturesApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<text-selection></text-selection>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the textSelection directive');
  }));
});
