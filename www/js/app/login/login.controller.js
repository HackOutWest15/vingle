(function(app){
  app.controller('loginController', function($scope, ngFB, $state, APIHandler){

    $scope.login = function(){
      ngFB.login({scope: 'email, user_friends'}).then(
        function (response) {
            console.log(response)
            if (response.status === 'connected') {
                console.log('Facebook login succeeded');
                ngFB.api({
                  path: '/me',
                  params: {fields:'friends'}
                }).then(function(user){
                  user.friends = user.friends.data;
                  window.localStorage.currentUser = JSON.stringify(user);
                  $state.go('search');
                })
            } else {
                alert('Facebook login failed');
            }
        });
    }
  });
}(angular.module('spotchat')))
