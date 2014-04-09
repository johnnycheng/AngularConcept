'use strict';

var servicesModule = angular.module('services', []);

servicesModule.factory('filterService', ['$http', '$q', function(http, q){

	function get() {
		var url = 'http://localhost:12008/norms/johnny.cheng@zenithoptimedia.com/userfilters';
		var deffered = q.defer();

		http.get(url, { withCredentials: true })
			.success(function(result) { 
				deffered.resolve(result); 
			})
			.error(function() { 
				deffered.reject(); 
			});

		return deffered.promise;
	};

	return { get: get } 
}])