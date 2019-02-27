var events = require('events');
var utils =  require('util');

var Person = function(name){
    this.name =  name;
}

utils.inherits(Person,events.EventEmitter);

var james =  new Person('james');
var watson =  new Person('watson');
var ryu =  new Person('ryu');

var people = [james, watson, ryu];

people.forEach(function(person){
    person.on('speak',function(msg){
        console.log(person.name+ ' said: '+ msg);
    });
})

james.emit('speak','helllo...');
watson.emit('speak','bolo...');