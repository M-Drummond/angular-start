(function(angular) {
  'use strict';
var myApp = angular.module('moviedb', []);

myApp.controller('moviesController', ['$scope', '$http' , function($scope, $http ) {
	var movies = this ;
 
	var source = 'http://www.omdbapi.com/?t=space&y=&plot=short&r=json' ;
	
	var list = ' ' ;

	console.log(source) ;

	$http.get(source).success(function(data){ 
			
		// movies = data ;

		console.log(data);

		// processMovies(data, movies);

		movies.list = data ;

		console.log(movies.list);

		$scope.movies = data; 

	});

}]);
})(window.angular);

 
// function processMovies(data, movies ) {
	

//  	console.log(movies);

//  	console.log(movies.movielist.Title);
// };