var app = angular.module('App', ['ngRoute', 'App.controllers']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $routeProvider.
    	when('/', {
        	templateUrl: 'views/templates/main.html',
        	controller: 'MainCtrl'
        })
        .when('/first-page', {
        	templateUrl: 'views/templates/first-page.html',
        	controller: 'FirstPageCtrl'
        })
        .when('/second-page', {
        	templateUrl: 'views/templates/second-page.html',
        	controller: 'SecondPageCtrl'
        })
        .otherwise({
        	redirectTo: '/'
        });

        // Get rid of '#' in URL, may only work with server
        // use the HTML5 History API
		$locationProvider.html5Mode({
		  enabled: true,
		  requireBase: false
		});

}]);
