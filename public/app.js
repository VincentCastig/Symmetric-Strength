angular.module("myApp", ['ui.router', 'ng-fusioncharts'])
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('register', {
        url: '/register',
        templateUrl: './templates/register.html',
        controller: 'userController'
      })
      .state('login', {
        url: '/login',
        templateUrl: './templates/login.html',
        controller: 'userController'
      })
      .state('logout', {
        url: '/',
        templateUrl: './templates/register.html',
        controller: 'userController'
      })
      .state('advanced', {
        url: '/advanced',
        templateUrl: './templates/advanced.html',
        controller: 'advancedController'
      })
      .state('log', {
        url: '/log',
        templateUrl: './templates/log.html',
        controller: 'advancedController'
      })
      .state('basic', {
        url: '/basic',
        templateUrl: './templates/basic.html',
        controller: 'basicController'
      })
      .state('about', {
        url: '/about',
        templateUrl: './templates/about.html'
      })


  })
