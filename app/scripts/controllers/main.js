'use strict';

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
