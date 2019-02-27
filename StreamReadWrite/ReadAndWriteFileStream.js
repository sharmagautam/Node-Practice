var fs = require('fs');
var readstream = fs.createReadStream('readstream','utf8');
var writestream = fs.createWriteStream('writestream');
readstream.on('data',function(chunk){
    //console.log('data received ......');
    //console.log(chunk);
    writestream.write(chunk);
});