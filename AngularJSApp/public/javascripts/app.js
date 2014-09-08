var TODOTasks = angular.module('MyApp',['ngRoute']);


TODOTasks.config(['$routeProvider',function($routeProvider){
    $routeProvider.
    when('/test',{
        controller:'TODOListCtrl',
        template:'<p>hello</p>'
    }).
    when('/trial',{
        templateUrl: '/assets/partials/trial.html'
    });
}]);
