'use strict';


describe('Directive: userFilters', function() {

    beforeEach(module('angularConceptApp'));
    beforeEach(module('views/directives/userFilters.html'));

    var scope, el;

    beforeEach(inject(function ($compile, $rootScope) {

        scope = $rootScope;
        var mockFilters = [{ name : 'filter 1' }, { name: 'filter 2' }];
        scope.filters = mockFilters;

        // create and compile directive
        el = angular.element('<user-filters></user-filters>');
        $compile(el)(scope);
        scope.$apply();
    }));

    it('should bind the data', function () {
        expect(el.text()).toContain('filter 1');
        expect(el.text()).toContain('filter 2');
    });

});


