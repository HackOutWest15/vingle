(function(app){
  app.controller('inboxController', function($scope, $rootScope, APIHandler,$http,$state){
    // start
    $http.get(APIHandler.API_URL+"/message?receiver="+$rootScope.currentUser.id).then(function(result){
      $scope.incomingMessages = result.data;
      console.log(result.data);
    });
    $scope.openMessage = function(message) {
      $rootScope.playback = {};
      $rootScope.playback.lines = message.msg;
      $rootScope.playback.track = message.track;
      $state.go('playback');
    }
    $scope.changeState = function(state){
      $state.go(state);
    }
  });

}(angular.module('spotchat')))
