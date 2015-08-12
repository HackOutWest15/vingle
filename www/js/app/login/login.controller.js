(function(app){
  app.controller('loginController', function($scope, ngFB, $state, APIHandler, $rootScope){
    if($rootScope.currentUser){
      $state.go('search');
    }

    $scope.login = function(){
      ngFB.login({scope: 'email, user_friends'}).then(
        function (response) {
            if (response.status === 'connected') {
                window.localStorage.accessToken = response.authResponse.accessToken;
                console.log('Facebook login succeeded');
                ngFB.api({
                  path: '/me',
                  params: {fields:'friends'}
                }).then(function(user){
                  user.friends = user.friends.data;
                  window.localStorage.currentUser = JSON.stringify(user);
                  $rootScope.currentUser = user;
                  $state.go('search');
                })
            } else {
                alert('Facebook login failed');
            }
        });
    }
  });
}(angular.module('spotchat')))
