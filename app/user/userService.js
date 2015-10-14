app.service('UserService', ['$q', '$http', function($q, $http){
	 this.users = null;	 

	 this.getUsers = function() {
	 		var deferred = $q.defer(); 
            $http.get('db/users.js')
            .success(function(data) {
            	//console.log("users "+JSON.stringify(data));
            	this.users = data;
            	deferred.resolve(data);
            })
            .error(function(reason) {
            	this.users = null;
                deferred.reject(reason);
            })
            return deferred.promise;
    }

    // this didnt work
    /*this.isValidUser = function(username, password) {
    	this.getUsers().then(function(data) {
    		for(var i = 0;i < this.users.length;i++) {
	    		if(users[i].username == username && users[i].password == password) {
	    			console.log("found "+JSON.stringify(data));
	    			return true;
	    		}
    		}

    		return false;
        });     	
    }*/
}]);