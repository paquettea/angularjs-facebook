angular.module("paquettea.facebook.wall").config(function($routeProvider){

    $routeProvider.when("/wall",{
        templateUrl:"/templates/wall/wall.html",
        controller: "WallController"

    });

});