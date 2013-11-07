angular.module("paquettea.facebook.newsfeed").factory("NewsfeedService",function(
    AuthenticationService,
    FBAPIService,
    FBDataStandarizer){

    return {
        feed: function(){
            return AuthenticationService.mustBeLoggedIn()
                .then(function(){
                    //console.log("ok");
                    var cachedContent =localStorage.getItem("newsfeed");
                    if (cachedContent != null){
                        cachedContent = JSON.parse(cachedContent);
                        return cachedContent;
                    }else{
                        return FBAPIService.feed(AuthenticationService.userInfo.userID)
                            .then(function(feedData){
                                //console.log(FBDataStandarizer);

                                    var feed =  FBDataStandarizer.post(feedData);
                                    localStorage.setItem("newsfeed",JSON.stringify(feed));
                                    return feed;



                            })
                    }
                });
        },
        clearCache : function(){
            localStorage.removeItem("newsfeed");
        }
    }
});