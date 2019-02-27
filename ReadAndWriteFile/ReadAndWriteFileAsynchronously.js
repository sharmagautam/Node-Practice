var fs = require('fs');

fs.readFile('readme','utf8',function(err, data){
    if(err) console.log('error whie reading the file = ', err);
    else{
    fs.writeFile('writeme',data,function(err, result){
        if(err) console.log('error while writing in file= ', err);
    });}
});