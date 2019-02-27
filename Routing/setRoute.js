var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    var url = req.url;
    console.log(url);
    if(url === '/' || url === '/index'){
        res.writeHead(200,{'content-type' : 'text/html'});
        fs.createReadStream('index.html','utf8').pipe(res);
        
    }
    else if(url === '/contact'){
        res.writeHead(200,{'content-type' : 'text/html'});
        fs.createReadStream('contact.html','utf8').pipe(res);
        
    }
    else if(url === '/api/getdata'){
        res.writeHead(200, {'content-type' : 'application/json'});
        var person = {
            name : 'gautam',
            age : 29
        }
        res.end(JSON.stringify(person));
    }
    else{
        res.writeHead(200,{'content-type' : 'text/html'});
        fs.createReadStream('404.html','utf8').pipe(res);
    }

}).listen(8081);