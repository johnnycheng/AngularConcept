'use strict';

angular.module('user-filters')
    .controller('UserFiltersCtrl', ['$scope', 'filterService', function ($scope, filterService) {

    filterService.get()
        .then(
            function(result) {
                $scope.filters = result;
            },
            function(error) {
                console.log('error', error);
            }
        );
}]);
