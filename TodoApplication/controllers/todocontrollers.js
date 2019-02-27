var bodyParser = require('body-parser');

module.exports = function(app){
    var urlEncodedParser = bodyParser.urlencoded({extended: false});

    var data = [{item : 'get Milk'}, {item : 'walk dog'}, {item : 'Learn Node'}];
    app.get('/todo', function(req, res){
        res.render('todo', {todos : data});   // render means always use ".ejs "  file extension otherwise it wont work.
                              // for ".html " extension we can use sendFile method.
     });

    app.post('/todo', urlEncodedParser, function(req, res){
        data.push(req.body);  // adda the requested data via post request to the array (data array).
        res.render('todo', {todos : data});
    });

    app.delete('/todo', function(req, res){

    });


};
