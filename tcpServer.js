var net = require('net');
var server = net.createServer(function(socket){
	var dateVal = new Date();
	//console.log("Client Started");
	var dformat= dateVal.getFullYear();
	dformat+= '-'+ ((dateVal.getMonth()+1)<10?'0'+(dateVal.getMonth()+1):(dateVal.getMonth()+1));
	dformat+= '-'+dateVal.getDate();
	dformat+= ' '+((dateVal.getHours() <10)? '0'+dateVal.getHours():dateVal.getHours());
	dformat+= ':'+ ((dateVal.getMinutes() <10)? '0'+dateVal.getMinutes():dateVal.getMinutes());
	socket.write(""+dformat);
	socket.end();

});
//console.log(JSON.stringify(server));
server.listen(process.argv[2]);