(function(app){
  app.controller('drawController', function($scope,$sce,$rootScope, $state){
    $scope.track.preview_urlTrusted = $sce.trustAsResourceUrl($rootScope.track.preview_url);
    $rootScope.mySketchDone=false;
    var audio = document.getElementById('audioDraw');
    $scope.music = {
      play: function(){
        audio.play();
      },
      pause: function(){
        audio.pause();
      },
      playing: function(){
        return !audio.paused;
      }
    };

    $scope.timeLeft = 30;
    var x = setInterval(function(){
      $scope.$apply(function(){
        console.log(audio.duration - audio.currentTime);
        $scope.timeLeft = Math.floor(audio.duration - audio.currentTime);
      });
    }, 1000)
    $scope.done=function(){
      $rootScope.mySketchDone=true;
      audio.pause();
      clearInterval(x);
      $state.go('send');
    }
    $scope.goToSearch = function(){
      audio.pause();
      $state.go('search');
    }
  });
}(angular.module('spotchat')));
