var fs = require('fs');
var http = require('http');
var server= http.createServer(function(request,response){
			var dataInFile = fs.createReadStream(process.argv[3]);
			dataInFile.pipe(response);
			//response.send();
	});

server.listen(process.argv[2]);