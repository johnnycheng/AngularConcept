/// <reference path="~/bower_components/angular/angular.min.js"/>
/// <reference path="~/bower_components/angular-mocks/angular-mocks.js"/>
/// <reference path="~/app/scripts/controllers/main.js"/>
/// <reference path="~/app/scripts/services/filterService.js"/>

'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('angularConceptApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {

    //jasmine.getEnv().currentRunner_.finishCallback = function () { };

    expect(scope.awesomeThings.length).toBe(3);
  });
});
