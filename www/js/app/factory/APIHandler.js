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
          track: {
            uri: $rootScope.track.uri,
            artist: $rootScope.track.artist,
            name: $rootScope.track.name,
            preview_url: $rootScope.track.preview_url
          },
          img: $rootScope.track.album.images[0].url,
          receiver: friend.id,
          watched: false,
          msg: $rootScope.lines
        }));
      });
      return $q.all(promises);
    }
  };
});
