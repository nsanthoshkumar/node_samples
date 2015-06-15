var http = require('http');
var bl= require('bl');
var urls =[];
urls.push(process.argv[2]);
urls.push(process.argv[3]);
urls.push(process.argv[4]);
var count=0;
var results =[];
//function test(i)
//for(var i=0;i<3;i++)
//{
	//console.log(i);
	urls.forEach(function(url, index){
		
	//var temp=process.argv[2+parseInt(i)];
	//console.log("Executed 1");
	
	http.get(url,function(response){
		//console.log("Executed 2");
		//console.log(process.argv[2+parseInt(i)]);
		response.pipe(bl(function(err,data){
			if(err)
				return console.error(err);
			else{
				//console.log("Executed 3");
				//console.log("i value",i);
				results[index++]=(data.toString());
				count++;
				if(count==3){
					for(var j=0;j<3;j++){
						//console.log("Executed 4");
						console.log(results[j]);
					}
				}
			}
		}))
	});
	
	})
//}
for(var j=0;j<3;j++){
	//test(j);
	//onsole.log('first')
}

/*http.get(process.argv[2], function(response){
	response.pipe(bl(function(err,data){
		console.log(data.toString());
	}));
	http.get(process.argv[3], function(response1){
	response1.pipe(bl(function(err,data){
		console.log(data.toString());
		http.get(process.argv[4], function(response2){
	response2.pipe(bl(function(err,data){
		console.log(data.toString());

	}));
	})
	}));
	})
	
})
*/

/* juggling async official solution */
/* 
 var http = require('http')
 var bl = require('bl')
 var results = []
 var count = 0

 function printResults () {
   for (var i = 0; i < 3; i++)
     console.log(results[i])
 }

 function httpGet (index) {
   http.get(process.argv[2 + index], function (response) {
     response.pipe(bl(function (err, data) {
       if (err)
         return console.error(err)

       results[index] = data.toString()
       count++

       if (count == 3)
         printResults()
     }))
   })
 }

 for (var i = 0; i < 3; i++)
   httpGet(i)

*/

The problem with the use of for statement and calling http.get() doesn't work because http.get() is an asynchronous function which runs
the process in the background and for is completely executed and the value of the index of for will be 4(random) and everytime the response will be assigned 
to that index.


/*http.get(process.argv[2], function(response){
	response.pipe(bl(function(err,data){
		console.log(data.toString());

	http.get(process.argv[3], function(response1){
	response1.pipe(bl(function(err,data){
		console.log(data.toString());
		http.get(process.argv[4], function(response2){
			response2.pipe(bl(function(err,data){
			console.log(data.toString());

	}));
	})
	}));
	})
	}));	
})
*/