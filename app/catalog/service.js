app.factory('catalogFactory', [
      '$q', '$http', '$rootScope',
        function($q, $http) {
       	  var categories = null;
       	  var categoryItems = null;

          var getCategories = function() {
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

          var categoriesResult = function() {
          	return categories;
          };

          var getCategoryItems = function() {
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

          var categoryItemsResult = function() {
          	return categoryItems;
          };

          var getItemById = function(itemId) {             
                for(var i=0;i<categoryItems.length;i++) {
                    if(categoryItems[i].id == itemId) {
                          return categoryItems[i];
                    }
                }
              return null;
          }

          var getSearchItems = function(searchStr) {

          }
          
          return {
          	getCategories:getCategories,
          	categoriesResult : categoriesResult,
          	getCategoryItems : getCategoryItems,
            categoryItemsResult: categoryItemsResult,
            getItemById : getItemById
          };
    }]);

