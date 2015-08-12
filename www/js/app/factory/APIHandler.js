angular.module('spotchat').factory('APIHandler', function($http, $rootScope, $q){
  var API_URL = 'https://vingle-backend.herokuapp.com';

  return {
    postMessage: function(friends){
      var randomId = Math.random();

      var promises = []
      friends.forEach(function(friend){
        promises.push($http.post(API_URL + "/message",{
          randomId: randomId,
          from: $rootScope.currentUser.id,
          uri: $rootScope.track.uri,
          img: $rootScope.track.album.images[0].url,
          msg: $rootScope.lines,
          receiver: friend.id,
          watched: false
        }));
      });
      return $q.all(promises);
    }
  };
});
