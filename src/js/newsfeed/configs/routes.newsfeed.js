angular.module("paquettea.facebook.newsfeed").config(
    function($routeProvider,
             defaultRouteConfig){



    $routeProvider.when("/",defaultRouteConfig({
        templateUrl:"newsfeed/newsfeed.html",
        controller: "NewsfeedController",
        resolve: {
            feed : function(NewsfeedService){
                return NewsfeedService.feed()
            }
        }
    }));

});