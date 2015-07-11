'use strict';

<<<<<<< HEAD
/**
 * @ngdoc overview
 * @name mytodoApp
 * @description
 * # mytodoApp
 *
 * Main module of the application.
 */
angular
  .module('mytodoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'LocalStorageModule'
  ])
  .config(['localStorageServiceProvider', function(localStorageServiceProvider){
      localStorageServiceProvider.setPrefix('ls');
    }])
=======
angular
  .module('sampleAppApp', [
    'ngCookies',
    'ngSanitize',
    'ngRoute'
  ])
>>>>>>> 36628840a2231c9f55119f8a35815bce85b2de98
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
<<<<<<< HEAD
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
=======
>>>>>>> 36628840a2231c9f55119f8a35815bce85b2de98
      .otherwise({
        redirectTo: '/'
      });
  });
