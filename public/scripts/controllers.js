var app = angular.module('App.controllers', ['ngRoute']);

app.controller('MainCtrl', ['$scope', '$location', function ($scope, $location) {

	$scope.test = "The app is working!";

	$scope.isActive = function(route) {
        return route === $location.path();
    }

}]);

app.controller('FirstPageCtrl', ['$scope', '$route', function ($scope, $route) {

	$scope.test = "this is the first page!";
	// $scope.$route = $route;

}]);

app.controller('SecondPageCtrl', ['$scope', '$route', function ($scope, $route) {

	$scope.test = "this is the second page!";
	// $scope.$route = $route;

}]);