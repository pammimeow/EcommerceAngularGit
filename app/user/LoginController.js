app.controller('LoginController', ['$rootScope','$scope', '$routeParams', 'UserService', '$location', 
	 function($rootScope, $scope, $routeParams, UserService, $location) {	 
	 	
	 	var users = [];
	 	$scope.username = "a";
	 	$scope.password = "1";

	 	$scope.login = function() {	 	
	 		UserService.getUsers().then(function(data) {
	 			 users = data;
    				
    			 for(var i = 0;i < users.length;i++) {
    			 	console.log("curr user "+users[i].username+" pwd "+users[i].password);
    			 	console.log("sc user "+$scope.username+" pwd "+$scope.password);
		    		if(users[i].username == $scope.username && users[i].password == $scope.password) {
		    			console.log("found ");
		    			$rootScope.isLoggedIn = true;
		    			$location.url("/");
		    		}
    			}

    			$scope.UserMessage = "Sorry!!! Your Credentials are invalid";
	 		});
	 }
}]);
