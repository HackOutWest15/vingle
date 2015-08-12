(function(app){
  app.controller('searchController', function($scope, Spotify, $rootScope, $state){
    // start

    $scope.$watch('searchInput', function(searchQuery){
      if(searchQuery){
        window.setTimeout(function(){
          Spotify.search(searchQuery, 'track').then(function (data) {
            $scope.tracks = data.tracks.items;
            console.log(data);
          });
        }, 1000)
      }
    })

    $scope.chooseTrack = function(track) {
      $rootScope.track = track;
  		$state.go('draw');
   		console.log(track);
    }
  });
}(angular.module('spotchat')))
