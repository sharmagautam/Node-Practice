path = require('path');
var time = 0;
var timer = setInterval(function () {
    time += 2;
    console.log(time + 'second passed');
    if (time > 8) {
        clearInterval(timer);
    }
}, 2000);

console.log(__dirname); 
console.log(__filename);
console.log(path.dirname(__filename)); // same as __dirname