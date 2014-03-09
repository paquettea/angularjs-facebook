angular.module("paquettea.facebook.common").provider("StorageService",function(){
    var StorageService,
        storage = localStorage;
    return StorageService = {

        get : function(key){
            return JSON.parse(storage.getItem(key));
        },
        set : function(key,value){
            storage.setItem(key,JSON.stringify(value));
        },
        remove :function (key){
            storage.removeItem(key)
        },
        removeAll : function (){
            storage.removeAll()
        },
        $get:function(){
            return {
                get : StorageService.get,
                set : StorageService.set,
                remove : StorageService.remove,
                clear : StorageService.removeAll
            }
        }
    };
});