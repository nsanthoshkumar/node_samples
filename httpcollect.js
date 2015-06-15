var http = require('http');
var bl= require('bl');
var dataString;
http.get(process.argv[2], function(response){
	
	response.pipe(bl(function(err,data){
		dataString = data.toString();
	}))
	response.on('end', function(){
		console.log(dataString.length);
		console.log(dataString);
	})
});

/*
response.pipe(bl(function(err,data){
		if(err){
			return console.error(err);
		}
		console.log(data.toString().length);
		console.log(data.toString());
	}))
*/