angular.module('paquettea.facebook.common', []);
angular.module('paquettea.facebook.wall', ['paquettea.facebook.common']);
angular.module('paquettea.facebook.messages', ['paquettea.facebook.common']);
angular.module('paquettea.facebook.newsfeed', ['paquettea.facebook.common']);
angular.module('paquettea.facebook.app', [
    'ngRoute',
    'paquettea.facebook.common',
    'paquettea.facebook.newsfeed',
    'paquettea.facebook.messages',
    'paquettea.facebook.wall'
]);