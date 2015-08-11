// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('spotchat', ['ionic'])

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
.run(function($state, $stateParams, $rootScope){
  $rootScope.API_URL = '10.47.12.141:1337';
  if(window.localStorage.currentUser == undefined){
    // $state.go('login')
    window.location.replace('/#/login')
  }
})
.config(function($urlRouterProvider){

  if(window.localStorage.currentUser != undefined){
    $urlRouterProvider.otherwise('/');
  }else{
    $urlRouterProvider.otherwise('/login');
  }
})
