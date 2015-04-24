'use strict';

/**
 * @ngdoc overview
 * @name md101importApp
 * @description
 * # md101importApp
 *
 * Main module of the application.
 */
angular
  .module('md101importApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/import', {
        templateUrl: 'views/import.html',
        controller: 'ImportCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
