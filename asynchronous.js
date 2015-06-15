var fs = require('fs');
var path = process.argv[2].toString();
//console.log(path);
fs.readFile(path, function(err,data){
//	console.log(data.toString());
console.log(data.toString().split('\n').length-1);
});//'/learnyounode/file.txt');
//console.log(buffer.toString());
