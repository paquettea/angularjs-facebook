angular.module("paquettea.facebook.common").constant("defaultRouteConfig",function(customConfig){
        var defaults = {
            /*resolve : {
                authentication: function(AuthenticationService){
                    return AuthenticationService.mustBeLoggedIn();
                }
            }*/
        };

        console.log(defaults);

        //Sugar component does a full merge since angular extend doesn't compare all nested properties
        return Object.merge(defaults, customConfig,true);


});