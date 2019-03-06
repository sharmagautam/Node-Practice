// make connection

// we have access the io here because we have downloaded the web socket in front end
var socket = io.connect('http://localhost:8081');


// query DOM

var msg = document.getElementById('message');
var handle = document.getElementById('handle');
var output = document.getElementById('output');
var btn = document.getElementById('send');
var feedback = document.getElementById('feedback');

// add listener
// after clicking on button send the data to server, where server will rcv the data and emit to all the client connected with the server
btn.addEventListener('click', function(){
    socket.emit('chat', {
        handle : handle.value,
        message : message.value
    });
});

msg.addEventListener('keypress', function(){
    socket.emit('typing', handle.value);
})


// receive the data sended by the server to all client
// listen for event

socket.on('chat', function(data){
    feedback.innerHTML="";
    output.innerHTML += '<p><strong>'+ data.handle +': </strong>'+ data.message +'</p>'
});

socket.on('typing', function(data){
    feedback.innerHTML = '<p><em>'+ data + 'is typing message... </p></em>'
})