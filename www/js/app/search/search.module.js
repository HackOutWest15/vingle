(function(app){
  app.config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state('search', {
      url: '/search',
      controller: 'searchController',
      templateUrl: 'js/app/search/search.html'
    });
  });
}(angular.module('spotchat')))
