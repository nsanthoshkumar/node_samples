var sum =0;
/*for(i = 2; i < process.argv.length; i++)
{
	sum += Number(process.argv[i]);
} */


process.argv.forEach(function(val, index, arr){
	//console.log(arr[index+2]);
	if(arr[index+2]!=undefined){
		sum += Number(arr[index+2]);
	}
	
});
console.log(sum);
