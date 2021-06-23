var app = angular.module('loginApp', ['login.loginService']);

app.controller('mainCtrl', ['$scope', 'LoginService', function($scope,LoginService){
	
	$scope.invalido = false;
	$scope.cargando = false;
	$scope.mensaje = "";
	
	$scope.datos = {};

	$scope.ingresar = function(datos){
		if (datos.email.length < 5) {
			$scope.invalido = true;
			$scope.mensaje = 'Ingrese el Usuarrio';
			return;
		} else if (datos.clave.length < 3) {
			$scope.invalido = true;
			$scope.mensaje = 'Ingrese la clave';
			return;
		}
		
		$scope.invalido = false;
		$scope.cargando = true;

		LoginService.login(datos).then(function(data){
			if(data.status == 200){
				console.log("Respuesta Ok 200");
				window.location = "booking.html"
			}
		});

	};

}]);