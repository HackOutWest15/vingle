(function(app){
  app.config(function($stateProvider){
    $stateProvider.state('inbox', {
      url: '/inbox',
      controller: 'inboxController',
      templateUrl: 'js/app/inbox/inbox.html'
    });
  });
}(angular.module('spotchat')))
