app.controller('CatalogController', ['$rootScope','$scope', '$routeParams', '$filter','catalogFactory',
	 function($rootScope, $scope, $routeParams, $filter, catalogFactory){
	 		$rootScope.currMenu = "Catalog";
		 	var maxItemsPage =6;
		 	$scope.selCategory = $routeParams.type || "All";
			$scope.currPage = $routeParams.page || 1;	
			$scope.layout ="row";	
			
			$scope.categoryItemsCurr = [];
			$scope.categoryPageItems = [];
			$scope.numPagesArray = [];

			var init = function() {		
			 	$scope.categoryPageItems = [];
			 	$scope.numPagesArray = [];
		 	}
			
			$scope.setRowLayout = function() {
				init();
				$scope.rowLayout = true;
		 		$scope.colLayout = false;
		 		maxItemsPage = 6;
		 		$scope.layout ="row";	 			
			}

			$scope.setColLayout = function() {
				init();
				$scope.rowLayout = false;
		 		$scope.colLayout = true;
		 		maxItemsPage = 12;	
		 		$scope.layout ="col";
			}

			// setting the layout
			if(typeof($routeParams.layout) == "undefined" || $routeParams.layout == "row") {
				$scope.setRowLayout();
			}
			else {
				$scope.setColLayout();
			}

	  		var getPageItems = function() {	
	  			$scope.numPages = Math.ceil($scope.categoryItemsCurr.length/maxItemsPage); 	  		

	  			for(var i=1;i<=$scope.numPages;i++)
	  				$scope.numPagesArray.push(i);

	  			if($scope.categoryItemsCurr.length > maxItemsPage) {
	  				// pagination needed
	  				var maxItem = $scope.currPage * maxItemsPage;
	  				var minItem = maxItem - maxItemsPage;

	  				for (var i = minItem; i < maxItem; i++) {
	  					if(typeof($scope.categoryItemsCurr[i]) != "undefined")
	  						$scope.categoryPageItems.push($scope.categoryItemsCurr[i]);
	  				};
	  			}
	  			else {
	  				$scope.categoryPageItems = $scope.categoryItemsCurr;
	  			}

	  		}

	  		$scope.addToCart = function (item){
	  			var isPresent = false;
	  			var newElem = {id:item.id, name:item.name, image : item.image, price:item.price, qty:1};
	  			for(var i =0; i<$rootScope.userCart.length; i++) {
	  				var currCartItem = $rootScope.userCart[i];
	  				if(currCartItem.id == item.id) {
	  					$rootScope.userCart[i].qty = $rootScope.userCart[i].qty + 1;
	  					isPresent = true;
	  				}

	  			}
	  			if(!isPresent)
	  				$rootScope.userCart.push(newElem);

	  			console.log(" res "+JSON.stringify($rootScope.userCart));    	
  			}

	  		/*catalogFactory.getCategoryItems().then(function() {

		  		$scope.categoryItems = catalogFactory.categoryItemsResult();

		  		if($scope.selCategory == null || $scope.selCategory == "All") {
		  			$scope.categoryItemsCurr = $scope.categoryItems;
		  		}
		  		else {
			  		for(var i=0;i<$scope.categoryItems.length;i++) {
			  			if($scope.categoryItems[i].category == $scope.selCategory) {
			  					$scope.categoryItemsCurr.push($scope.categoryItems[i]);
			  			}
			  		}
			  	}  	


	  		getPageItems();		
  			console.log("curr items "+JSON.stringify($scope.categoryPageItems));
  			console.log("num l "+$scope.categoryPageItems.length);
  			console.log("num l "+JSON.stringify($scope.categoryPageItems[0]));
  		});*/
  		

  		if($scope.selCategory == null || $scope.selCategory == "All") {
		  	$scope.categoryItemsCurr = $rootScope.categoryItems;
		 }
		else {
			for(var i=0;i<$rootScope.categoryItems.length;i++) {
			  	if($rootScope.categoryItems[i].category == $scope.selCategory) {
			  		$scope.categoryItemsCurr.push($scope.categoryItems[i]);
			  	}
			}
		}  	

  		getPageItems();		
		console.log("curr items "+JSON.stringify($scope.categoryPageItems));
		console.log("num l "+$scope.categoryPageItems.length);
		console.log("num l "+JSON.stringify($scope.categoryPageItems[0]));
	}
]);
