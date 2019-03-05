var express = require('express');
var Ninja = require('../models/ninja');
var route = express.Router();

route.get('/ninja', function(req, res, next){
    res.send({type : 'GET'});
});

route.post('/ninja', function(req, res, next){
   // console.log(req.body);
   Ninja.create(req.body).then(function(ninja){
        res.send(ninja);
   }).catch(next);
    
});

route.put('/ninja/:id', function(req, res, next){
    Ninja.findByIdAndUpdate({_id : req.params.id}, req.body).then(function(){
        Ninja.findOne({_id : req.params.id}).then(function(ninja){
            res.send(ninja);
        }).catch(next);
    });
});

route.delete('/ninja/:id', function(req, res, next){
    Ninja.findByIdAndRemove({_id : req.params.id}).then(function(ninja){
        res.send(ninja);
    }).catch(next);
});


module.exports = route;