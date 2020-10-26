const isRaining = true;

// isRaining = false; //will error because we can't change a const variable

console.log(isRaining)


const person = {
    age: 27
}

person.age = 28; //will not error because age is a property on constant object
// person = {}; //will error because we are trying to change object person
console.log(person)