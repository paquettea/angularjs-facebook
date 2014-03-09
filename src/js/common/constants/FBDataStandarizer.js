angular.module("paquettea.facebook.common").provider("FBDataStandarizer",function (){

    var FBDataStandarizer;
    return FBDataStandarizer = {
            picture : function(media){
                return {
                    src : media.src,
                    descriptions: media.description
                };

            },
            attachedLink : function(media,description){
                media.description = description;
                return media;
            },
            video : function (src,href){
                return {
                    href : href,
                    src : src
                };
            },
            $get : function (){
                return {
                    post : function(postArray){
                        var parsedData = [],
                            cachedPosts = JSON.parse(localStorage.getItem("newsfeed"));

                        angular.forEach(postArray, function(data,index){
                            //console.log("post found",data);

                            postArray[index].actor = {
                                picture : "http://graph.facebook.com/" + postArray[index].actor_id + "/picture?type=square"
                            };
                            if (angular.isDefined(data.attachment) && angular.isDefined(data.attachment.media) && data.attachment.media.length > 0){
                                //from FQL
                                postArray[index].pictures = [];
                                postArray[index].attachedLink = [];

                                angular.forEach(data.attachment.media,function(media){

                                    switch (media.type){
                                        case "video":
                                            break;
                                        case "photo":
                                            //console.log("SRC ",media.type,media.src,media);
                                            /*if (angular.isDefined(media[media.type].images)){
                                             postArray[index].pictures.push(media[media.type].images[media[media.type].images.length-1]);//take the last image, which is bigger
                                             }else if (angular.isDefined(media.src)){
                                             postArray[index].pictures.push({image:{src : media.src}});
                                             }*/

                                            if (angular.isDefined(media.src)){
                                                //  console.log("adding");
                                                postArray[index].pictures.push(new FBDataStandarizer.picture(media));
                                            }

                                            break;
                                        case "link":
                                            postArray[index].attachedLink.push(new FBDataStandarizer.attachedLink(media,data.attachment.description));
                                            break;
                                        case  "swf":
                                            postArray[index].attachedLink.push(new FBDataStandarizer.video(media[media.type].preview_img,media[media.type].source_url));
                                            break;

                                    }
                                });

                            }else if (angular.isDefined(data.picture)){
                                //FROM GRAPH
                                postArray[index].pictures = [{src : data.picture}];
                            }

                            /*if (data.message == ""){
                             postArray[index].message =  data.description;
                             }*/

                        });

                        return postArray;
                    }
                }
            }

        };
    }
);