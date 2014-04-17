'use strict';

angularConceptApp.directive('userFilters', function(){
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'views/directives/userFilters.html',
        controller: 'UserFiltersCtrl'
    }
});

angularConceptApp.controller('UserFiltersCtrl', ['$scope', function($scope){

}]);


