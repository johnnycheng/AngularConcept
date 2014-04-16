'use strict';

describe('Service: filterService', function () {

    // load the controller's module
    beforeEach(module('angularConceptApp'));

    describe('get', function(){

        it('should issue a get request to api/userfilters', inject(function (filterService, $httpBackend) {
            var filters = [],
                mockFilters = [{ name : 'filter 1' }, { name: 'filter 2' }];

            $httpBackend.when('GET', 'api/userfilters').respond(mockFilters);

            filterService.get().then( function(result){
                filters = result;
            });

            $httpBackend.flush();

            expect(filters.length).toBe(2);
        }));

    });
});



