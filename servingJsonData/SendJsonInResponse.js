var http = require('http');

http.createServer(function(req, res){
    console.log(req.url);  // will show u the requestes url
    res.writeHead(200, {'content-type' : 'application/json'});
    var person = {
        name: 'gautam',
        age : 29
    };
    res.end(JSON.stringify(person));  // since this method expect either string or buffer so that's y
                                      // i converted the json into string format 
}).listen(8081);