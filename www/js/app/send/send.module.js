(function(app){
  app.config(function($stateProvider){
    $stateProvider.state('send', {
      url: '/send',
      controller: 'sendController',
      templateUrl: 'js/app/send/send.html'
    });
  });
}(angular.module('spotchat')))
