const express = require('express');
const socket = require('socket.io');

const app = express();
// static file
app.use(express.static('public'));  

var server = app.listen(8081, function(){
    console.log('listening at port 8081');
});

// socket setup
var socket_io = socket(server);  // in order to use socket need to set the where you want to setup the socket on the server

socket_io.on('connection', function(socket){

    //console.log('made socket connection', socket.id);

    // rcv the data from client who is typing  and send to all client connected to thsi server
    socket.on('chat', function(data){
        socket_io.sockets.emit('chat',data);
    });
    
    socket.on('typing', function(data){
        socket.broadcast.emit('typing', data);
    });
});