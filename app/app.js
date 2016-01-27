var app = angular.module('myApp', []);
app.controller('movieController', function($scope, $http ) {
 
 $http.get('awards.json').success(function(data) {
 	console.log('awards get') ;
 	movieList.movies = [] ;
 	$scope.movies = [] ;
 	movieList.movies = data ;
 	$scope.movies = movieList.movies; 



 	console.log(movieList.movies); 
   
	 });





});



// (function(angular) {
//   'use strict';
// var myApp = angular.module('moviedb', ['ngRoute']);

// myApp.controller('moviesController', ['$scope', '$http' , function($scope, $http ) {

// 	var movies = [] ;
// 	var moviesList = this;
//     $scope.movies = [
// 			{"Title": "2001, A Space Odyessy", "Director": "Stanley Kubrick"} ,
// 			{"Title": "The Matrix", "Director": "The Wachowskis" } 
// 		];
 	
 

// }]);
// })(window.angular);

 
// function processMovies(data, movies ) {
	

//  	console.log(movies);

//  	console.log(movies.movielist.Title);
// };
/////////////
// json path 
// var source = 'http://www.omdbapi.com/?t=space&y=&plot=short&r=json' ;
