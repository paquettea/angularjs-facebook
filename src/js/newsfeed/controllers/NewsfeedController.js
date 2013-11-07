angular.module("paquettea.facebook.newsfeed").controller("NewsfeedController",
    function($scope,
             $rootScope,
             $route,
             NewsfeedService,
             feed){


        $rootScope.page = {
            title :"News Feed"
        };
        $scope.feed = feed;

        $scope.refreshCache = function(){
            NewsfeedService.clearCache();
            $route.reload();

        }
});