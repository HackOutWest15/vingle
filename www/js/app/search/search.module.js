(function(app){
  app.config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state('search', {
      url: '/',
      controller: 'searchController',
      templateUrl: 'js/app/search/search.html'
    });
    $urlRouterProvider.otherwise("/");
  });
}(angular.module('spotchat')))
