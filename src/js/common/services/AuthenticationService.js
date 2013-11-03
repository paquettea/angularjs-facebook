angular.module("paquettea.facebook.common").factory("AuthenticationService",function(FBAPIService,$q){
    var loggedIn = false;
    return {
        mustBeLoggedIn : function(){
            console.log($q);
            //var qLogin = $q.defer();
            return FBAPIService.getLoginStatus().then(
                function(){
                    //logged in;
                    return true;

                },function(){
                    //not logged in, prompt again
                    return FBAPIService.login().then(function(response){
                        loggedIn = true;
                        return response;
                    },function(response){
                        loggedIn = false;
                        return response;
                    });
                })
        }
    }
});