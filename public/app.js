angular.module("myApp", ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('register', {
        url: '/',
        templateUrl: './templates/register.html',
        controller: 'userController'
      })
      .state('login', {
        url: '/login',
        templateUrl: './templates/login.html',
        controller: 'userController'
      })
      .state('advanced', {
        url: '/advanced',
        templateUrl: './templates/advanced.html',
        controller: 'advancedController'
      })
      .state('basic', {
        url: '/basic',
        templateUrl: './templates/basic.html',
        controller: 'basicController'
      })


  })
