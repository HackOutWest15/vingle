(function(app){
  app.config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state('search', {
      url: '/',
      controller: 'searchController',
      templateUrl: 'js/app/search/search.html'
    });
  });
}(angular.module('spotchat')))
