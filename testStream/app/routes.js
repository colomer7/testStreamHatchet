//var Todo = require('./models/todo');
var http = require('http');
var https= require('https');
var responseTwitch = "";
var resupuesta = "";
var options = {
    host: 'api.twitch.tv',
    path: '/kraken/streams',
    method: 'GET',
    headers: {
        accept: 'application/vnd.twitchtv.v5+json',
        'Client-ID': 'e58bb9u3nmtqp4ikxaz1qg05kelpy7l'
    }
};


module.exports = function(app) {

	// get all streams
	app.get('/api/streams', function(req, res) {
		https.get(options,function(response){
			var body = '';
			response.on('data', function(chunk){
				body += chunk;
			});
			
			response.on('end', function(){
				responseTwitch = JSON.parse(body);
				res.json(responseTwitch);
				//console.log("Got a response: ", responseTwitch);
			});
		});

	});

	// get filter streams
	app.get('/api/filter', function(req, res) {
		var url = require('url');
		var url_parts = url.parse(req.url, true);
		var query = url_parts.query;
		var game = query.game;
		var re = new RegExp(' ', 'g');
		game = game.replace(re, "+");
		console.log("joc = " + game)
		var options_aux = options;
		options.path += "/?game=" + game;
		https.get(options,function(response){
			var body = '';
			response.on('data', function(chunk){
				body += chunk;
			});
			
			response.on('end', function(){
				responseTwitch = JSON.parse(body);
				res.json(responseTwitch);
				//console.log("Got a response: ", responseTwitch);
				options.path = "/kraken/streams";
			});
		});

	});

	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
};