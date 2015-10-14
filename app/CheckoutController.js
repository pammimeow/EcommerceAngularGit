app.controller('CheckoutController', ['$rootScope','$scope', '$routeParams', '$location',
	 function($rootScope, $scope, $routeParams, $filter, catalogFactory){
	 	if($rootScope.userCart.length > 0 ) {
		 	$rootScope.userCart = [];
		 	$scope.message = "Thank you for shopping with us. ";
	 	}
	 	else {
	 		$scope.message = "No items in the cart";
	 	}
}]);
