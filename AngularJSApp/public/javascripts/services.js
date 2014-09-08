'use strict';

var TODOTasksServices = angular.module('TODOTasksServices', ['ngResource']);

TODOTasksServices.factory('Tasks', ['$http',
          function($http){
          var serviceTasks = {};
          serviceTasks.getTasks = function(){
          return $http({
              method : 'GET',
              url : 'http://localhost:9000/'
              });
          return serviceTasks;
      };
  }]);
