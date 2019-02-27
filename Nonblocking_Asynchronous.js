var fs = require("fs");

fs.readFile('/home/gautam/Desktop/testdemo', function(err, data){
	if(err) return console.error(err);
	console.log(data.toString());
});
console.log('Ended...'); 
