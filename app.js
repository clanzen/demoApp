"use strict";

// node requires;
var app = require('express.io')()
	, express      = require('express')
    , http         = require('http')
    , url          = require('url')
    , path         = require('path')
    , bodyParser   = require('body-parser')
    , request      = require('request')
    , cfenv        = require('cfenv')
;

var appInfo = JSON.parse(process.env.VCAP_APPLICATION || "{}");
var services = JSON.parse(process.env.VCAP_SERVICES || "{}");
var myArgs = process.argv.slice(2);
var host = (process.env.VCAP_APP_HOST || myArgs[0] || 'localhost');
var port = (process.env.VCAP_APP_PORT || myArgs[1] || 3000);
var appEnv = cfenv.getAppEnv();

// app defined with express and socket.io
// Only necessary to support the user interface.
//app.http().io();

//------------------------------------------------------------------------------
// Set up the listener
//------------------------------------------------------------------------------
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

// start server on the specified port and binding host
//app.listen(appEnv.port, appEnv.bind, function() {
app.listen(port, host, function() {
	// print a message when the server starts listening
  	console.log("\n=================================================="
  		      + "\n= Starting at: http://" + host + ":" + port //appEnv.url
		      + "\n==================================================");
});


//------------------------------------------------------------------------------
// express routes: get info logging
//------------------------------------------------------------------------------
app.get('/', function(req, res) {
    res.send('Hello World!');
})
