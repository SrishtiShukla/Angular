var MyApp = angular.module('MyApp',['ngRoute', 'authorController']);

MyApp.config(['$routeProvider',function($routeProvider){
    $routeProvider.
    when('/test',{
        template:    '<p>Test Hello</p>'
    }).
    when('/trial',{
        templateUrl: '/assets/partials/trial.html'
    }).
    when('/welcome',{
        templateUrl: '/assets/partials/welcomefile.html',
        controller: 'AuthorDetailController'
    }).
    otherwise({
        redirectTo: '/test'
    });
}]);
