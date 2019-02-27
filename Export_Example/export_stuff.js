// count the length of array

 var counter = function countArrayLength(arr){
    return arr.length;
}

var adder = function add(num1, num2){
    // if we will use backtick symbol instead of single quote thn we can write like below ie no concanatation is required.
    return `the sum of two numer is ${num1 + num2}`;
}

var PI = 3.14;

// 1st way to export

//module.exports.counter = counter;
//module.exports.adder = adder;
//module.exports.pi = PI;

// 2nd way to export 

// module.exports = {
//     counter : counter,
//     adder : adder,
//     pi : PI
// };

// 3rd way to export

 module.exports = {
     counter ,
     adder ,
      PI
 };

// 4th way to export 
// Directly write 

// module.exports var adder = function add(num1, num2){
//    return num1 + num2;
// }