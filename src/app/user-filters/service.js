'use strict';

angular.module('user-filters')
    .factory('filterService', ['$http', '$q', function(http, q){

	function get() {
		var url = 'api/userfilters';
		var deferred = q.defer();

		http.get(url, { withCredentials: true })
			.success(function(result) {
                deferred.resolve(result);
			})
			.error(function() {
                deferred.reject();
			});

		return deferred.promise;
	};

	return { get: get } 
}])