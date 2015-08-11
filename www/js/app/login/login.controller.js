(function(app){
  app.controller('loginController', function($scope, ngFB, $state){

    $scope.login = function(){
      ngFB.login({scope: 'email'}).then(
        function (response) {
            if (response.status === 'connected') {
                console.log('Facebook login succeeded');
                // $scope.closeLogin();
                window.localStorage.currentUser = response;
                $state.go('search');
            } else {
                alert('Facebook login failed');
            }
        });
    }
  });
}(angular.module('spotchat')))
