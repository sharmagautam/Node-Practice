var createServer = require("http");
createServer.createServer(function(request, response){
	response.writeHead(200, {'Content-Type' : 'text/plain'});
	response.end('hello i am responding from server!!!');
}).listen(8081);
console.log("server running on 127.0.0.1:8081/");

