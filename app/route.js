app.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider) {
		console.log("config");
		$routeProvider.
	      when('/', {
	        templateUrl: 'views/home.html',
	        //controller: 'HomeCtrl'
	      }).
	      when('/login', {
	        templateUrl: 'views/login.html',
	       // controller: 'LoginController'
	      }).
	      when('/catalog', {
	        templateUrl: 'views/catalog/catalog.html',
	        controller: 'CatalogController'
	      }).
	      when('/catalog/:type/:page?/:layout?', {
	        templateUrl: 'views/catalog/catalog.html',
	        controller: 'CatalogController'
	      }).
	      when('/inner/:itemId', {
	        templateUrl: 'views/catalog/itemInner.html',
	        controller: 'SinglePageController'
	      }).
	      when('/cart', {
	        templateUrl: 'views/cart.html',
	        controller: 'CartController'
	      }).
	      when('/checkout', {
	        templateUrl: 'views/checkout.html',
	        controller: 'CheckoutController'
	      }).
	      otherwise({
	        templateUrl: 'views/error.html'
	    });
	}
]);

app.run(function($rootScope, $location, catalogFactory) {
  console.log("run2");
  $rootScope.isLoggedIn = false;
  $rootScope.currMenu = "Home";
  $rootScope.$on('$routeChangeSuccess', function () {
  		if($rootScope.isLoggedIn == false) {
  			$location.url("/login");
  			return;
  		}

	   	catalogFactory.getCategories().then(function() {
		  	$rootScope.categories = catalogFactory.categoriesResult();
		  	console.log("pr "+JSON.stringify($rootScope.categories));
		});	

		catalogFactory.getCategoryItems()
		.then(function() {
			$rootScope.dataSource = catalogFactory.categoryItemsResult();
		  	$rootScope.categoryItems = $rootScope.dataSource;		  
		  	console.log("on run "+$rootScope.categoryItems.length);
  		})
		.catch(function() {
			console.log("caught ");			
  		});

  })
})