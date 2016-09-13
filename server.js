
var express = require('express');
var application = express();
var mongoose  = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var multer = require('multer');
var router = express.Router();
var path = require('path');
var methodOverride = require('method-override');
var Schema = mongoose.Schema;

//Making server file to assign port dynamically.
var port = process.env.PORT || 7878;

// Connecting to MongoDB
var connection = mongoose.connect('mongodb://localhost/crkappi');

//-----------------------Configuration----------------------------------------

//------------routing static files.....
//Making express to look in the public directory for (css, js, html .....).
application.use(express.static(__dirname + '/public'));
application.use('/node_modules', express.static(__dirname + '/node_modules'));
application.use('/scripts', express.static(__dirname + '/scripts/'));
application.use('/styles', express.static(__dirname + '/styles'));
application.use(multer({dest: __dirname + '/uploads/'}).any());
application.use(morgan('dev'));
application.use(bodyParser.urlencoded({ 'extended': true }));
application.use(bodyParser.json());
application.use(bodyParser.json({ type: 'application/vnd.api+json'}));
application.use(methodOverride());

//routes----------------------------

application.post('/upload', function(request, response){
	console.log(request.body); 
	//console.log(request);
	console.log('Files : ' + request.files); 
	console.log('Name : ' + request.body.name);
	response.json({ success: true });
});


//Setting the home page
application.get('/', function(request, response){
	response.sendFile('index');
});

application.listen(port, function(){
	console.log('Node Server is running on port: ' + port);
});