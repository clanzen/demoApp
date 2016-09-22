"use strict";

var express = require('express');
var app = express();

var myArgs = process.argv.slice(2);
var host = (process.env.VCAP_APP_HOST || myArgs[0] || 'localhost');
var port = (process.env.VCAP_APP_PORT || myArgs[1] || 3000);

//------------------------------------------------------------------------------
// Set up the listener
//------------------------------------------------------------------------------
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
});

//------------------------------------------------------------------------------
// express routes: get info logging
//------------------------------------------------------------------------------
app.get('/crash', function(req, res) {
	setInterval(crashIt, 1);
    res.send('App is crashing now.');
}); 

//------------------------------------------------------------------------------
// Function to assist in forcing this app to crash.
//------------------------------------------------------------------------------
var crashIt = function() {
	some.that.does.not.exist(0);
} 
