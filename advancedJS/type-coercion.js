//Type Coercion - to a string, to a number, or to a boolean (no others)
//avoid first two at all costs
//boolean coercion is ok i.e. truthy/falsy for if statement

console.log('5' + 5) // -> 55
console.log(5 + '5') // -> 55
console.log('5' - 5) // -> 0
console.log(5 === 5) // -> true number 5 equals number 5
console.log('5' === 5) // -> false string 5 does NOT equal number 5
console.log('5' == 5) // -> true 5 of any type equals 5 of any type

console.log(typeof 123) // return string 'number'
console.log(typeof 'blue') // return string 'string'
console.log(typeof false) // return string 'boolean'
console.log(typeof null) // return string 'object'
console.log(typeof undefined) // return string 'undefined'
console.log(typeof NaN) // return string 'number'
console.log(typeof 0) // return string 'number'

//NOT OK boolean coercion:
//converts boolean 'true' to number 1 and then adds
//false converts to 0
const value = true + 12
const type = typeof value
const value2 = false + 12
console.log(value, type)
console.log(value2, type)
