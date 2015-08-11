angular.module('spotchat').factory('APIHandler', function($http, $rootScope){
  var API_URL ='http://10.47.12.141:1337';

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
