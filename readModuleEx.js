var rModule = require('./readModule.js');
rModule(process.argv[2].toString(), process.argv[3].toString(), function(err,data){
	if(err){
			//return console.error("Error Finding the lists",err);
		console.log("Error Finding the lists",err);
	}
	else{
		data.forEach(function(item){
			console.log(item);
		})
	}
});