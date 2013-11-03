angular.module("paquettea.facebook.common").factory("FBAPIService",function($http,$q){
   return {
       login : function(){
           var qLogin = $q.defer();
           FB.login(function(response) {
               if (response.authResponse){
                   qLogin.resolve(response);
               }else{
                   qLogin.reject(response)
               }
           }, {scope: 'email,user_likes,read_stream,read_mailbox,read_requests'});

           return qLogin.promise;
       },
       getLoginStatus: function(){
           var qLoginStatus = $q.defer();
           FB.getLoginStatus(function(response) {
                if (response.status === 'connected') {
                    qLoginStatus.resolve(true);
                }else{
                    qLoginStatus.reject(false);
                }
           });
           return qLoginStatus.promise;
       },
       feed:function(AuthenticationService){
           FB.api('/platform', function(response) {
               return response;
           });
       }

   }
});