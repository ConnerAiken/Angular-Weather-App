var app = angular.module('weatherApp', ['ui.router', 'ngCookies', 'ngAnimate']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
  .state('home', {
    url: '/home',
    controller: 'homeCtrl',
    templateUrl: 'app/templates/home.html'
  })
  .state('forecast',{
    url: '/forecast/zip/:zip',
    controller: 'forecastCtrl',
    templateUrl: 'app/templates/forecast-week.html',
  })
  /* I normally do controllerAs: 'vm' syntax as well */
  $urlRouterProvider.otherwise('home');
});
