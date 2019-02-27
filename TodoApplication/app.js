var express = require('express');
var todocontrollers = require('./controllers/todocontrollers');

var app =  express();

todocontrollers(app);
// set the template engine
app.set('view engine','ejs');

// set the static file 
app.use(express.static('public'));

app.listen(8081);

console.log('we are listening at 8081');