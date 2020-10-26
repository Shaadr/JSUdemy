'use strict'
//Primitive value: string, number, boolean, null, undefined
//Object: myObject --> Object.prototype --> null
//Array: myArray --> Array.prototype --> Object.prototype --> null
//Function: myFunc --> Function.prototype --> Object.prototype --> null
//String: myString --> String.prototype --> Object.prototype --> null
//Number: myNumber --> Number.prototype --> Object.prototype --> null
//Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null

//94 
//Object
//prototype chain:
// const productLiteral = {
//     name: 'Influence'
// }

// const productConstructor = new Object({
//     name: 'The War Of Art'
// })
// console.log(productConstructor)

// //hasOwnProperty -> returns true or false
// console.log(productLiteral.hasOwnProperty('name'))
// //-> true because 'name' property lives on "productLiteral" object
// console.log(productLiteral.hasOwnProperty('hasOwnProperty')) 
// //-> false because "hasOwnProperty" property lives on Object.prototype, not "productLiteral" object

// //can see prototype object in browser:
// console.log(productLiteral)

//95 - Other types

//Array
const team = ['Luke', 'Maddison']
const teamConstructor = new Array(['Tom', 'Chuck'])
console.log(team.hasOwnProperty('length')) //-> true
console.log(team.hasOwnProperty('filter')) //-> false, on the Object.prototype

//Function
const getScore = () => 1
// console.log(getScore)

const funtionConstructor = new Function('a', 'b', 'return a + b')
// console.log(funtionConstructor)

//String
const myString = 'some text'

const stringConstructor = new String('Phone')
console.log(stringConstructor)

