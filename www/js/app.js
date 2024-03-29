// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('spotchat', ['ionic', 'spotify', 'ngOpenFB', 'angular-p5'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.run(function($location, $stateParams, $rootScope, ngFB){
  if(window.localStorage.currentUser == undefined){
    $location.path('/login');
  }else{
    $rootScope.currentUser = JSON.parse(window.localStorage.currentUser);
    ngFB.api({
      path: '/me',
      params: {fields:'friends'}
    }).then(function(user){
      user.friends = user.friends.data;
      window.localStorage.currentUser = JSON.stringify(user);
      $rootScope.currentUser = user;
    })
  }

  $rootScope.$on('$stateChangeSuccess', function (ev, to, toParams, from, fromParams) {
     $rootScope.previousState = from
  });
})
.run(function($ionicPlatform, ngFB) {
  ngFB.init( {appId: '412805898909794',
              accessToken: window.localStorage.accessToken
              });
})
.config(function($urlRouterProvider){

  if(window.localStorage.currentUser != undefined){
    $urlRouterProvider.otherwise('/search');
  }else{
    $urlRouterProvider.otherwise('/login');
  }
})
