(function(app){
  app.config(function($stateProvider){
    $stateProvider.state('draw', {
      url: '/draw',
      controller: 'drawController',
      templateUrl: 'js/app/draw/draw.html'
    });
  });
}(angular.module('spotchat')))
