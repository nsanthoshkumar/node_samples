var http = require('http');
var url = require('url');
var server = http.createServer(function(req, res){
		urlReq =url.parse(req.url,true);
		var dateStr = urlReq.query.iso;
		console.log(dateStr);
		var epochDate = new Date(dateStr);
		console.log(epochDate.toGMTString());
		var epochTime =epochDate.getTime();
		var jsonres ={};
		res.writeHead(200,{'Content-Type':'application/json'});
		if(urlReq.pathname.toString() ==='/api/parsetime'){
			//console.log('In here');
				console.log(urlReq.pathname, epochDate.getUTCHours());
			jsonres.hour = epochDate.getHours();
			jsonres.minute =epochDate.getUTCMinutes();
			jsonres.second = epochDate.getUTCSeconds();
			res.write(''+JSON.stringify(jsonres));
			res.end();
		}
		else{
			//console.log(urlReq.pathname);		
			jsonres.unixtime = epochTime;
			res.write(''+JSON.stringify(jsonres));	
			res.end();
		}
});

server.listen(process.argv[2]);