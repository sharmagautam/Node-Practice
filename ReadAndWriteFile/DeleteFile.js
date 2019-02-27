var fs = require('fs');

fs.unlink('writeme', function(err, result = true){
    if(err) console.log(err);
    else console.log(result);
});