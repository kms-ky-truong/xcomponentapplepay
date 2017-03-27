'use strict';

var app = require('./index');
var http = require('http');



var server;

/*
 * Create and start HTTP server.
 */

server = http.createServer(app);
server.listen(process.env.PORT || 8000);
server.on('listening', function () {
    console.log('Server listening on http://localhost:%d', this.address().port);
});


/*
 * Create and start HTTPS server (to test Apple Pay)
 */
var https = require('https');
var fs = require('fs');
var privateKey  = fs.readFileSync('sslcert/key.pem', 'utf8');
var certificate = fs.readFileSync('sslcert/cert.pem', 'utf8');
var credentials = {key: privateKey, cert: certificate};
var httpsServer = https.createServer(credentials, app).listen(8443);
httpsServer.on('listening', function () {
    console.log('Server listening on https://localhost:%d', this.address().port);
});


