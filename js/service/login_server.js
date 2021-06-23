var app = angular.module('login.loginService', []);

app.factory('LoginService',['$http', '$q', function($http, $q){

	var self = {
		login: function (datos) {
			var d = $q.defer();			
			$http({
				method: 'GET',
				url: 'https://dev.tuten.cl:443/TutenREST/rest/user/'+datos.email,
				headers: {
					'app': 'APP_BCK'
				}
			}).then(function successCallback(response){
				d.resolve(response)
			})
			return d.promise;
		}
	};

	return self;


}]);