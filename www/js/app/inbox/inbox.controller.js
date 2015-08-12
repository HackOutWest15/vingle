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
  });
}(angular.module('spotchat')))


// <a class="item item-avatar" href="#" ng-repeat="user in users">
//   <img ng-src="{{ avatar }}">
//   <h2>{{ username }}</h2>
//   <p>{{ songTitle }}</p>
//   <p>{{ artist }}</p>
// </a>

    // $scope.message = data.messages.items;
