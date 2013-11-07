angularjs-facebook
==================

An angularjs client for facebook API

Like Sencha did a prototype to prove than HTML5 is ready for doing rich apps, this is a tryout for implementing a client
for the Facebook API inside an AngularJS App.

Installation
------------

Clone the repo.

Have nodejs installed http://nodejs.org

run the followings in the clone folder

```sh
$ npm install
$ npm -g install grunt-cli karma bower
$ npm install
$ bower install
$ grunt dev
```

This will create the static files in "dist" folder. there is also `grunt prod` that does the same but without the watch.