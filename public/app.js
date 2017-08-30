angular.module("myApp", ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('login', {
        url: '/',
        templateUrl: './templates/login.html'
      })
      .state('register', {
        url: '/register',
        templateUrl: './templates/register.html',
        controller: 'registerController'
      })
      .state('advanced', {
        url: '/advanced',
        templateUrl: './templates/advanced.html',
        controller: ['goalController', 'currentController']
      })
      .state('home', {
        url: '/home',
        templateUrl: './templates/home.html',
        controller: 'goalController'
      })


  })
