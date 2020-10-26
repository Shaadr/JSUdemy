//Function - input (arguments), code, output (return value)

//this allows the cli to use "prompt" to get user input
//normally prompt is run on the window object (window.prompt) which doesnt exist in cli
const prompt = require('prompt-sync')();

// let name = prompt('name?' , 'you')

// let greetUser = function (name) {
//     console.log("hey " + name + "!")
// }

// greetUser(name)

////-----////

// let num = Number(prompt('Enter a number: '));
// // num = Number(num);
// if (isNaN(num)) {
//     console.log('Not a Number, try again');
//     return;
// }
// console.log(`Your number: ${num} + 4 =`);
// console.log(num + 4);

////------////

// function square (n) {
//     let r = Math.pow(n,2);
//    return r;
// }

// let value = square(6);

// console.log(value)


//Challenge Area

//convertFahrenheithToCelsius
//take in temp in f
//convert to c
//return c
//Call (32 -> 0) , (68 -> 20), etc
//print converted values

// function convertFahrenheithToCelsius(f) {
//     let c = (f - 32) / 1.8
//     return c;
// }

// let c1 = convertFahrenheithToCelsius(32);
// let c2 = convertFahrenheithToCelsius(68);

// console.log(c1)
// console.log(c2)

///-----/// 
/** question from the video:
 
 * ok, so I understand everything so far, but... how come I cant use return instead of console.log() ... ?

for example: 

  const toDos = [`study`, `get a programming job`, `stop being poor`, `relax`, `feel happy`] 
              return `{ you have ${toDos.length} todos}`
If you can answer this for me, I would appreciate it... I'm still gonna google it though. I can't wrap my head arround it at the moment.
**/

const toDos = [`study`, `get a programming job`, `stop being poor`, `relax`, `feel happy`] 

//solution 1

// function todoFunction(toDos) {
//     let s = `you have ${toDos.length} todos`
//     return s;
// }
// let numTodos = todoFunction(toDos);
// console.log(numTodos)

//solution 2

// let toDoMessage = `you have ${toDos.length} todos`
// console.log(toDoMessage)

//solution 3

return `{${console.log(`you have ${toDos.length} todos`)}}`

//Reasoning:

/* Return doesn't 'print out' any information to the screen like the console.log() function does. 
You are returning a value from a function that isn't stored in a variable, and therefore not using it. 
In this case you are returning the entire string "you have ${toDos.length} todos". 
To print this to the screen, you would still have to use the console.log function, passing in whatever argument variable you stored from this return.
In the third example you are simply printing it randomly to the screen and thats it.  
The second example stores it to a variable for later use and is more functional for actual use elsewhere (such as showing the end user).
 */