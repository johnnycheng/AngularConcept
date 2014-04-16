'use strict';

angularConceptApp.directive('userFilters', function(){
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'views/directives/userFilters.html',
        controller: 'userFiltersController'
    }
});

angularConceptApp.controller('userFiltersController', ['$scope', 'filterService', function($scope, filterService){
    filterService.get()
        .then(
        function(result) {
            $scope.filters = result;
        },
        function(error) {
            console.log('error', error);
        }
    )
}]);


