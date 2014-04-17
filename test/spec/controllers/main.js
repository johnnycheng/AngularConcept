/// <reference path="~/app/bower_components/angular/angular.min.js"/>
/// <reference path="~/app/bower_components/angular-mocks/angular-mocks.js"/>
/// <reference path="~/app/scripts/controllers/main.js"/>
/// <reference path="~/app/scripts/services/filterService.js"/>

'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('angularConceptApp'));

  var MainCtrl, scope, deferred, mockFilterService;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $q) {
      scope = $rootScope.$new();

      mockFilterService = { get: function () {} };
      deferred = $q.defer();
      spyOn(mockFilterService, 'get').andReturn(deferred.promise);

      MainCtrl = $controller('MainCtrl', {
          $scope: scope,
          filterService: mockFilterService
    });
  }));

    it('should get a list of filters', function () {
        var mockFilters = [{ name : 'filter 1' }, { name: 'filter 2' }];
        deferred.resolve(mockFilters);
        scope.$apply();
        expect(mockFilterService.get).toHaveBeenCalled();
        expect(scope.filters.length).toBe(2);
    });
});



