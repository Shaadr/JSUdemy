// === equality operator (tests value AND type)
// ==
// !== inequality operator

let temp = 31;
let isFreezing = temp <= "31";
let A = 'abc' < 'aaa'; //false. b/c js determines it "lexicographically" or letter by letter.
// b > a is true because a = 0, b = 1, c = 2
let B = '123' < '111'; // is the numerical of the above "A" variable. "1" and "1" are the same, so it moves to "2"< "1" which is false.
let C = "11" < "4"; // true.  B/c "1" < "4";

// console.log(typeof(temp));
console.log('lexicographically:',C);
console.log(isFreezing);


//challenge
var age = 29;

let isChild = age <= 7;
let isSenior = age >= 65;

console.log(isChild);
console.log(isSenior);