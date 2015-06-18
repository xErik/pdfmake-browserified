var open = require("open");
var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname+'/test/')).listen(8080);
console.log('http://localhost:8080');
open('http://localhost:8080'); 
