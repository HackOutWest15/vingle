(function(app){
  app.config(function($stateProvider){
    $stateProvider.state('outbox', {
      url: '/outbox',
      controller: 'outboxController',
      templateUrl: 'js/app/outbox/outbox.html'
      
    });
  });
}(angular.module('spotchat')))
