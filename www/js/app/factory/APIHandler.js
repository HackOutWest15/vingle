angular.module('spotchat').factory('APIHandler', function($http){
  var API_URL ='http://10.47.12.141:1337';

  return {
    postMessage: function(friends, msg){
      friends = friends.map(function(friend){
        return {
          id: friend.id,
          watched: false
        };
      });

      $http.post(API_URL + "/message",{
        msg: msg,
        receivers: friends
      });
    }
  };
});
