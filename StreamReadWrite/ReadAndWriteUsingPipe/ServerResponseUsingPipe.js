var fs = require('fs');
var http = require('http');

var createserver = http.createServer(function(req, res){
    // for sending the plain text in response

    // res.writeHead(200,{'content-type': 'text/plain'})
    // var readstream = fs.createReadStream('readstream','utf8');
    // readstream.pipe(res);


    // send html file in response
    res.writeHead(200,{'content-type': 'text/html'})
    var readstream = fs.createReadStream('index.html');
    readstream.pipe(res);

});
    createserver.listen('8081');

    console.log('server is running on 8081...');