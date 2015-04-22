import angular from 'angular';

var userModule = angular.module('user', []);

userModule.factory('CurrentUser', function CurrentUser($q) {
	return {
		name: "got me name, m8",
		get: function() {
			var deferred = $q.defer();

			deferred.resolve({
				name: 'Panda'
			});

			return deferred.promise;
		}
	};
});

export default userModule;