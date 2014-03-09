angular.module("paquettea.facebook.newsfeed").factory("NewsfeedService",function(
    AuthenticationService,
    FBAPIService,
    StorageService,
    FBDataStandarizer){

    return {
        feed: function(){
            return AuthenticationService.mustBeLoggedIn()
                .then(function(){
                    //console.log("ok");
                    var cachedContent = StorageService.get("newsfeed");
                    if (cachedContent != null){
                        return cachedContent;
                    }else{
                        return FBAPIService.feed(AuthenticationService.userInfo.userID)
                            .then(function(feedData){
                                var feed =  FBDataStandarizer.post(feedData);
                                StorageService.set("newsfeed",feed);
                                return feed;
                            })
                    }
                });
        },
        clearCache : function(){
            StorageService.remove("newsfeed");
        }
    }
});