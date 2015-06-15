var http = require('http');
var parser = require('through2-map');
var server = http.createServer(function(req, res){
	req.pipe(parser(function(chunk){
		return chunk.toString().toUpperCase();
	})).pipe(res);

});

server.listen(process.argv[2]);