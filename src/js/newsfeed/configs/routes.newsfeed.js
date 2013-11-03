angular.module("paquettea.facebook.newsfeed").config(function($routeProvider,defaultRouteConfig){
    console.log("route",defaultRouteConfig({
        templateUrl:"newsfeed/newsfeed.html",
        controller: "NewsfeedController"
    }));
    $routeProvider.when("/",defaultRouteConfig({
        templateUrl:"newsfeed/newsfeed.html",
        controller: "NewsfeedController"
    }));

});