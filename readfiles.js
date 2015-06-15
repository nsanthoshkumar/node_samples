var fs = require('fs');
var counter = 0;
fs.readdir(process.argv[2], function(err,list){
	for(i=0;i<list.length;i++){
		if(list[i].indexOf('.'+process.argv[3].toString())!=-1){
			console.log(list[i]);
			//counter++;
		}
	}		
	//console.log(counter);
});

/*var path = require('path');
list.forEach(function(file){
	path.extname(file)
})

*/