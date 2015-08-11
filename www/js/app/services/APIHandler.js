angular.module('spotchat').factory('APIHandler', function($http){
  var API_URL ='http://10.47.12.141:1337';

  return {
    login: function(){
      window.location.replace(API_URL + "/user/facebook?redirect_url="+window.location.href);
    }
  }
});
