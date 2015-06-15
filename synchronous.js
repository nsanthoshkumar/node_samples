var fs = require('fs');
//console.log(process.argv[1]);
var path = process.argv[2].toString();
//console.log(path);
var buffer = fs.readFileSync(path);//'/learnyounode/file.txt');
//console.log(buffer.toString());
console.log(buffer.toString().split('\n').length-1);