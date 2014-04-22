'use strict';

angular.module('app', ['user-filters'])
    .config(function($routeProvider, $locationProvider){
        $locationProvider.html5Mode(true);
        $routeProvider
            .when('/',
            {
                templateUrl: 'app/main.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            })
    });

angular.module('user-filters', ['ngRoute'])
    .config(function($routeProvider, $locationProvider){
        $locationProvider.html5Mode(true);
        $routeProvider
            .when('/user-filters',
            {
                templateUrl: 'app/user-filters/list.html',
                controller: 'UserFiltersCtrl'
            })
            .otherwise({
                redirectTo: '/'
            })
    });
