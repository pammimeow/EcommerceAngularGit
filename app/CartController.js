app.controller('CartController', ['$rootScope','$scope', '$routeParams', '$location',
	 function($rootScope, $scope, $routeParams, $location){

	 	$scope.totalCart = 0;
	 	
	 	$scope.calcTotalCart = function totalCart() {
	 		$scope.totalCart = 0;
	 		for(var i =0; i<$rootScope.userCart.length; i++) {
	 			$scope.totalCart = $scope.totalCart + ($rootScope.userCart[i].price * $rootScope.userCart[i].qty);
	 		}
	 	}

	 	$scope.calcTotalCart();

	 	$scope.changeCart = function(itemId, op) {
	 		for(var i =0; i<$rootScope.userCart.length; i++) {
	  				var currCartItem = $rootScope.userCart[i];
	  				if(currCartItem.id == itemId) {
	  					if(op == "+") {
	  						$rootScope.userCart[i].qty = $rootScope.userCart[i].qty + 1;
	  					}
	  					else if(op == "-") {
	  						if($rootScope.userCart[i].qty > 0) {
	  							$rootScope.userCart[i].qty = $rootScope.userCart[i].qty - 1;
	  						}
	  						if($rootScope.userCart[i].qty == 0) {
	  							$rootScope.userCart.splice(i, 1);
	  						}
	  					}	  					
	  			}
	  		}

	  		$scope.calcTotalCart();
	 	}

	 	$scope.checkout = function() {
	 		console.log('loc '+$location.url());
	 		$location.url("/checkout");
	 	}
}]);


/* some comment test1 */

/* some comment test2 */

/* some comment test3 */

/* some comment test4 */

