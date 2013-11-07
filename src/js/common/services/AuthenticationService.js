angular.module("paquettea.facebook.common").factory("AuthenticationService",function(FBAPIService,$q){
    var loggedIn = false;
    var AuthenticationService;
    return AuthenticationService = {
        userInfo : {},
        mustBeLoggedIn : function(){
            //var qLogin = $q.defer();
            return FBAPIService.getLoginStatus().then(
                function(response){
                    //logged in;
                    console.log("ici");
                    AuthenticationService.userInfo = response.authResponse;
                    console.log(response);
                    return true;

                },function(){
                    //not logged in, prompt again
                    return FBAPIService.login().then(function(response){
                        loggedIn = true;
                        console.log("la");
                        AuthenticationService.userInfo = response.authResponse;
                        return response;
                    },function(response){
                        loggedIn = false;
                        console.log("NOT logged in ");
                        return response;
                    });
                })
        }
    }
});