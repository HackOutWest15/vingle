(function(app){
  app.controller('outboxController', function($scope, $rootScope, APIHandler, $http, $state){
    // start


    $http.get(APIHandler.API_URL + '/message/sent/' + $rootScope.currentUser.id).then(function(result){
    	$scope.sentMessages = result.data;
    	console.log($scope.sentMessages);
    });



   $scope.openMessage = function(message) {
   		$rootScope.playback = {};
   		$rootScope.playback.lines = message.lines;
   		$rootScope.playback.track = message.track;
   		$state.go('playback');
   }

   $scope.changeState = function(state){
     $state.go(state);
   }

  });
}(angular.module('spotchat')))
