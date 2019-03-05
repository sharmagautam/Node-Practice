var express = require('express');
var routes = require('./routes/api');
var bodypareser = require('body-parser');
const mongoose= require('mongoose');

// set up express app
var app = express();

// connect to mongodb 
mongoose.connect('mongodb://localhost/ninjadb',{ useNewUrlParser: true, useFindAndModify: false });
mongoose.Promise = global.Promise;


app.use(bodypareser.json());   // if you will use this middleware after the below line then it will not work.
                                 
app.use('/api',routes);

// error handler
app.use(function(err, req, res, next){
   // console.log(err);
    res.status(422).send({error : err.message});
});

app.listen(process.env.port || 4000, function(){
    console.log('running on port number 5000');
});