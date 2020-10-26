//notes

//80/81

//#1
// arrow functions do not have access to "arguments"

//works
const add = function () {
    return arguments[0] + arguments[1]
}
console.log(add(11,22,33,44))

//breaks
// const add2 = () => arguments[0] + arguments[1]
// console.log(add2(11,22,33,44))


//#2
//arrow func not good candidates for methods b/c they do not bind "this"

//works
const car = {
    color: 'Red',
    getSummary: function () {
        return `The car is ${this.color}`
    }
}
console.log(car.getSummary())

//'this' is undefined
const car2 = {
    color: 'Blue',
    getSummary: () => {
        return `The car is ${this.color}`
    }
}
console.log(car2.getSummary())

//alternative shorthand:
const car3 = {
    color: 'Green',
    getSummary() {
       return `The car is ${this.color}` 
    }
}
console.log(car3.getSummary())
