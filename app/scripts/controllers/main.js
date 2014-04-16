'use strict';

angularConceptApp.controller('MainCtrl', ['$scope', 'filterService', function ($scope, filterService) {

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
