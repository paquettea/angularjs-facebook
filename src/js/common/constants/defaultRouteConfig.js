angular.module("paquettea.facebook.common").constant("defaultRouteConfig",function(customConfig){
        var defaults = {
            resolve : {
                authentication: function(AuthenticationService){
                    console.log("getting login state");
                    return AuthenticationService.mustBeLoggedIn();
                }
            }
        };
        return angular.extend(defaults, customConfig);


})