app.controller('SinglePageController', ['$rootScope','$scope', '$routeParams', '$filter','catalogFactory',
	 function($rootScope, $scope, $routeParams, $filter, catalogFactory){
	 	
	 	$scope.currId = $routeParams.itemId || null;
	 	$scope.item = catalogFactory.getItemById($scope.currId);
	 	console.log("curr item "+JSON.stringify($scope.currItem));
}]);