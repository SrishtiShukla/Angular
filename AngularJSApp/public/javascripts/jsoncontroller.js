var myNameSpace = angular.module('MyApp',[]);

myNameSpace.controller("MyAppController", ['$scope', function($scope){

        $scope.author = {"firstName":"Srishti", "lastName":"Shukla"};
}]);
