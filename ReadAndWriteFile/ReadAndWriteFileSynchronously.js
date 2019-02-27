var fs = require('fs');

// read the file synchronously
var readfile_binary = fs.readFileSync('readme');  // If you will not specify the encoding type it will give you output in binary format.
console.log(readfile_binary);

var readfile = fs.readFileSync('readme','utf8');
console.log(readfile);

// write the file synchronously

fs.writeFileSync('writeme',readfile);  // creae the file and write the data if file is not available