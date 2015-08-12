(function(app){
  app.controller('drawController', function($scope,$sce,$rootScope, $state){
    $scope.track.preview_url = $sce.trustAsResourceUrl($rootScope.track.preview_url);

    var audio = document.getElementById('audioPlayback');
    $scope.music = {
      play: function(){
        audio.play();
      },
      pause: function(){
        audio.pause();
      }
    };

    $scope.goToSearch = function(){
      audio.pause();
      $state.go('search');
    }
  });
}(angular.module('spotchat')));
