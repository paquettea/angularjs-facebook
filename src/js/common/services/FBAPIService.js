angular.module("paquettea.facebook.common").factory("FBAPIService",function($http,$q){
   function _apiCall(path,params){
       var qApi = $q.defer();
       FB.api(path, params,function(response) {
           console.log(response);
           qApi.resolve(response.data);
       });

       return qApi.promise;
   }

    function _apiFQLCall(query){
        var qApi = $q.defer();
        console.log("fql");
        FB.api("/fql", { q:{"query1":query}},function(response) {
            console.log("heur",response);
            qApi.resolve(response.data[0].fql_result_set);
        });

        return qApi.promise;

    }
   return {
       login : function(){
           var qLogin = $q.defer();
           FB.login(function(response) {
               if (response.authResponse){
                   qLogin.resolve(response);
               }else{
                   qLogin.reject(response)
               }
           }, {scope: 'email,user_likes,read_stream,read_mailbox,read_requests,user_status,'});

           return qLogin.promise;
       },
       getLoginStatus: function(){
           var qLoginStatus = $q.defer();
           FB.getLoginStatus(function(response) {
                if (response.status === 'connected') {

                    qLoginStatus.resolve(response);
                }else{
                    console.log("is NOT connected");
                    qLoginStatus.reject(false);

                }
           });
           return qLoginStatus.promise;
       },
       feed:function(user){

           return _apiFQLCall("SELECT actor_id, message, description,attachment FROM stream WHERE filter_key='nf' ORDER BY updated_time DESC LIMIT 20");
           //return _apiCall('/' + user + '/home');

       }

   }
});