var app = angular.module("baseModule", ["ngRoute"]);

app.run(function($rootScope){
	$rootScope.userCart = [];
});

/*app.config(function($rootScope) {
	$rootScope.userCart = [];
});*/