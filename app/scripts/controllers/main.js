'use strict';

<<<<<<< HEAD
/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
    var todosInStore = localStorageService.get('todos');

    $scope.todos = todosInStore || [];

    $scope.$watch('todos', function () {
      localStorageService.set('todos', $scope.todos);
    }, true);


    $scope.addTodo = function() {
    if ($scope.todo != '') {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
      }
    };

      $scope.removeTodo = function(index) {

          $scope.todos.splice(index, 1);

        };
  });
=======
angular.module('sampleAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
  .controller("ChoreCtrl", function($scope) {
    $scope.logChore = function(chore) {
        alert(chore + " is done!");
    }
})
.directive("kid", function() {
    return {
        restrict: "E",
        scope: {
            done: "&"
        },
        template: '<input type="text" ng-model="chore">' +
          ' {{chore}}' +
          ' <div class="btn btn-success btn-sm" ng-click="done({chore:chore})">I\'m done!</div>'
    }
});
>>>>>>> 36628840a2231c9f55119f8a35815bce85b2de98
