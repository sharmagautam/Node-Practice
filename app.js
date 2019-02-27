var express = require('express');
var bodyparser = require('body-parser');

var app = express();

// set the urlcode encode parser
var urlencodeParser = bodyparser.urlencoded({extend : true});
//app.use(bodyparser.urlencoded({ extended: false }))

// set the view engine 
app.set('view engine', 'ejs');   

// add middleware for static file like css file and images
app.use('/assets', express.static('public'));  // first parameter is if u request the url "localhost:8081/assets/your static file name  it will give u that assets
                                               //  and the second param is to link the public folder with middleware.
 
// "res.send" is use for sening the string to the  client
app.get('/string', function(req, res){
    res.send('this is send the response in simple string.');
});

// without using any template engine
// in order to send the html file we need to use another method called "sendFile"

// app.get('/home', function(req, res){
    
//     res.sendFile(__dirname + '/index.html');
// });

// app.get('/contact', function(req, res){
//     res.sendFile(__dirname + '/contact.html');
// });

// above html file can be send in response using "render" for that we need to create these file in views folder with ".ejs"
// extension

app.get('/home', function(req, res){
    res.render('index');  // since the index.html is in the view folder we do not need to specify the full name.
});

app.get('/contact', function(req, res){
    console.log(req.query);  //  this will give u the query string in json format like {email : 'gautam@gmail.com', job : 'softwaredeveloper'}
    res.render('contact', {qs : req.query});
});

// post method
app.post('/contact',urlencodeParser, function(req, res){
    console.log(req.body);     // here urlencodeParser middleware provide the access for body ie access the data from body.
    res.render('contact_post_success', {data : req.body});
});


// using  "ejs" template engine 
app.get('/profile/:name', function(req, res){  // grab the name from url and pass the name to the view using the object person
    var data = {age : 29,
                job : 'software developer',
                hobbies : ['eating', 'cooking', 'traveling']
    };
    res.render('profile',{person : req.params.name, data : data});  // profile is the file name created in views folder with ejs extension. 
                                                       // we need to render the file instead of send the file.
                                                       // no need to pass full path of the file bcoz by default it will look for the view folder 
   // res.send(`you are requested for the id ${req.params.id}`);
});

app.listen(8081);