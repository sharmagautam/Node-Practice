// this is simple fuction
function sayHi(){
    console.log('saying hi...');
}

sayHi();  // calling of fuction 


// function expression (fuction having no name is known as anonymous function.)
bye = function(){
    console.log('say bye...');
}

 bye();  // calling of fuction


// call bye function by passing it into another function
function callFunction(fun){
    fun();
}

callFunction(bye);  // calling bye fuction by passing it to the another function