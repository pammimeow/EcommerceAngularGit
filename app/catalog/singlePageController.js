app.controller('SinglePageController', ['$rootScope','$scope', '$routeParams', '$filter','catalogFactory', '$controller',
	 function($rootScope, $scope, $routeParams, $filter, catalogFactory, $controller){
	 	
	 	$scope.currId = $routeParams.itemId || null;
	 	$scope.item = catalogFactory.getItemById($scope.currId);

	 	var catalog = $controller('CatalogController',{$scope: $scope});
	 	//console.log("curr sel c "+$scope.selCategory);
}]);