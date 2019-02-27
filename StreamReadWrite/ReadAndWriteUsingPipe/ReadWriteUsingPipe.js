var fs = require('fs');

var readstream = fs.createReadStream('readstream','utf8');
var writestream = fs.createWriteStream('writestream');

readstream.pipe(writestream);
//console.log(readstream);