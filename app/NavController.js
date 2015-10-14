app.controller('NavController', ['$rootScope','$scope', '$routeParams', '$location', 'catalogFactory',
	 function($rootScope, $scope, $routeParams, $location, catalogFactory){
	 	$scope.obj = {};
	 	$scope.obj.searchCatalog = "s";

	 	$scope.logout = function() {
	 		console.log("logout");
	 		$rootScope.isLoggedIn = false;
	 	}	 	

	 	$scope.search = function() {
	 		console.log("search "+$scope.obj.searchCatalog);
	 		catalogFactory.getSearchItems($scope.obj.searchCatalog);
	 		console.log("af "+$rootScope.categoryItems.length);
	 		$location.url("/catalog");
	 	}
}]);
