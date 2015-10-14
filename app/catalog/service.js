app.factory('catalogFactory', [
      '$q', '$http',  '$rootScope',
        function($q, $http, $rootScope) {
       	  var categories = null;
       	  var categoryItems = null;

          var catalogFactoryObject = {};

          console.log("factory");

          catalogFactoryObject.getCategories = function() {
            console.log("in factory m");
            var deferred = $q.defer(); 
            $http.get('db/categories.js')
            .success(function(data) {
            	console.log("categories "+data);
            	categories = data;
            	deferred.resolve(data);
            })
            .error(function(reason) {
            	categories = null;
                deferred.reject(reason);
            })
            return deferred.promise;
          };

          catalogFactoryObject.categoriesResult = function() {
          	return categories;
          };

          catalogFactoryObject.getCategoryItems = function() {
            var deferred = $q.defer(); 
            $http.get('db/datastore.js')
            .success(function(data) {            	
            	categoryItems = data;
            	//angular.copy($scope.master, $scope.user);
            	deferred.resolve(data);
            })
            .error(function(reason) {
            	categoryItems = null;
                deferred.reject(reason);
            })
            return deferred.promise;
          };

          catalogFactoryObject.categoryItemsResult = function() {
          	return categoryItems;
          };

          catalogFactoryObject.getItemById = function(itemId) {             
                for(var i=0;i<categoryItems.length;i++) {
                    if(categoryItems[i].id == itemId) {
                          return categoryItems[i];
                    }
                }
              return null;
          }

          catalogFactoryObject.getSearchItems = function(searchStr) {
              catalogFactoryObject.getCategoryItems().then(function() {
                  $rootScope.categoryItems = [];
                  for(var i=0;i<categoryItems.length;i++) {
                          if((categoryItems[i].name.indexOf(searchStr) > -1) || 
                            (categoryItems[i].desc.indexOf(searchStr) > -1)) {
                                $rootScope.categoryItems.push(categoryItems[i]);
                          }
                  }                  
              });   

              console.log("af in "+$rootScope.categoryItems.length);           
          }
          
          return catalogFactoryObject;
    }]);

