angular.module("myApp", ['ui.router', 'ng-fusioncharts'])
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('register', {
        url: '/login',
        templateUrl: './templates/register.html',
        controller: 'userController'
      })
      .state('login', {
        url: '/register',
        templateUrl: './templates/register.html',
        controller: 'userController'
      })
      .state('logout', {
        url: '/logout',
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
        templateUrl: './templates/workoutLog.html',
        controller: 'advancedController'
      })
      .state('basic', {
        url: '/',
        templateUrl: './templates/basic.html',
        controller: 'basicController'
      })
      .state('about', {
        url: '/about',
        templateUrl: './templates/about.html'
      })


  })
