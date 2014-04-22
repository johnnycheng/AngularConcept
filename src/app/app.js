'use strict';

angular.module('app', ['user-filters']);

angular.module('user-filters', ['ngRoute'])
    .config(function($routeProvider, $locationProvider){

        $locationProvider.html5Mode(true);

        $routeProvider.when('/user-filters',
            {
                templateUrl: 'app/user-filters/list.html'
            })
    });
