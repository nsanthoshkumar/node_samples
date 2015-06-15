var fs = require('fs');
var path = require('path');
var data =[];
module.exports= function(dirName, exten, callback){
fs.readdir(dirName, function(err,list){
	 if(err){
		return callback(err);
	 }
	 else{
	 /*list.forEach(function(item){
		if(path.extname(item)=='.'+exten){
			data.push(item);
		}
	 })*/
	 list = list.filter(function(item){
		return  path.extname(item)==='.'+exten;
	 });
	 callback(null,data);
	 }
	//console.log(counter);
});
}
