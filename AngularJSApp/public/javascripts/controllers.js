var authorController = angular.module('authorController' , []);

authorController.controller("AuthorDetailController" , [ '$scope' , function($scope){

$scope.author = { "firstName": "Srishti" , "lastName": "Shukla" };

}]);