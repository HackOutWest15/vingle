angular.module('spotchat').factory('APIHandler', function($http, $rootScope){
  var API_URL ='https://vingle-backend.herokuapp.com/';

  return {
    postMessage: function(friends, msg, uri){
      friends = friends.map(function(friend){
        return {
          id: friend.id,
          watched: false
        };
      });

      return $http.post(API_URL + "/message",{
        from: $rootScope.currentUser.id,
        uri: $rootScope.track.uri,
        msg: $rootScope.lines,
        receivers: friends
      });
    }
  };
});
