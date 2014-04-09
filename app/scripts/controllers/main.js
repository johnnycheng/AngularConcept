'use strict';

var myModule = angular.module('angularConceptApp', ['services']);

myModule.controller('MainCtrl', ['$scope', 'filterService', function ($scope, filterService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

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
