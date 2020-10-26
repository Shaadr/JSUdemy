//functions returning functions and Closures
//https://stackoverflow.com/questions/7629891/functions-that-return-a-function

//Closure

function counter() {
    var count = 0;
    return function() {
        console.log(count++);
    }
}
var count = counter();
count();
count();
count();

//Function return function

function d() {
    function e() {
        console.log('E');
    }
    return e;
}
d()();
//logs 'E'
//I was confused by the d()(); at first but then realized that the first () calls d 
//and the second () calls d's return value, which is e. 