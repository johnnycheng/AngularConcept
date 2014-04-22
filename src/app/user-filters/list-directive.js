'use strict';

angular.module('user-filters')
    .directive('zoUserFilters', function(){
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/user-filters/list.html',
        controller: 'UserFiltersCtrl'
    }
})
    .controller('UserFiltersCtrl', ['$scope', function($scope){

}]);


