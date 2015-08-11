(function(app){
  app.config(function($stateProvider){
    $stateProvider.state('login', {
      url: '/login',
      controller: 'loginController',
      templateUrl: 'js/app/login/login.html'
    });
  });
}(angular.module('spotchat')))
