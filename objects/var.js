// var lets you recreate variables with the same name. let and const do not
// var firstName = 'Mike'
// firstName = 'Mike'

// var firstName = 'Jen' 

// console.log(firstName)

//var is function scoped, not block scoped
// if (10===10) {
//     var firstName = 'Jen' //if change to let, an error will trigger
// }

// console.log(firstName) //should not be able to access

// function scope example:
// const setName = function () {
//     var firstName = 'Tommy'
// }

// setName()
// console.log(firstName)

//third diffence accesing before declared
//works as intended, declared then called
// var age;
// console.log(age)

//should error (does for let/const), but doesnt and returns undefined and not 10. 
//var DECLARATION gets hoisted (bad), not not the assigning
console.log(age)
var age = 10;

//hoisted for above looks like this (which is why undefined and not 10):
//var age;
//console.log(age);
//age = 10;
