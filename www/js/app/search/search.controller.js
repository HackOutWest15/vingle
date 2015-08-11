(function(app){
  app.controller('searchController', function($scope, Spotify, $rootScope, $state){
    // start

   $scope.searchTrack = function(searchQuery) {
   		Spotify.search(searchQuery, 'track').then(function (data) {
  			$scope.tracks = data.tracks.items; 

  			console.log(data);

		});
   }

   $scope.chooseTrack = function(track) {
		$rootScope.track = track;
		$state.go('draw')
   		console.log(track); 
   }

   

  });
}(angular.module('spotchat')))
