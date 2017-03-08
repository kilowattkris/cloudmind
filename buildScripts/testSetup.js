//This file isn't transpiled so much use CommonJS and ES5

//Register bavel to transpile before we run our tests
require('babel-register')();

//Disable webpack features that Mocha doesn't understand
require.extensions['.css'] = function() {};

