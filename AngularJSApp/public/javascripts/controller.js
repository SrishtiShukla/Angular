'use strict';

var TODOTasksControllers = angular.module('TODOTasksControllers', []);

TODOTasksControllers.controller('TODOListCtrl',  ['$scope', 'Task',
  function($scope, Tasks ) {
    $scope.todoTask = [] ;
    Tasks.getTasks().success(function(data) {
        console.log('calling tasks in controller');
        $scope.tasks = data;
       });
  }]);

