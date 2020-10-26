'use strict'

//Prototypal Inheritance

//constructor function
//can't use => function because no access to 'this'
const Person = function (firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
}

Person.prototype.getBio = function () {
    let bio = `${this.firstName} is ${this.age}.`

    //this accesses its parent this value because it does not bind "this"
    this.likes.forEach( like => {
        bio += ` ${this.firstName} likes ${like}.`
    })
    return bio
}

Person.prototype.setName = function (name) {
    let names = name.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
}

// Person.prototype.location = "Thailand"

const me = new Person('Mike','Hanks', 30, ['coding', 'gaming'])

//changes single instance of getBio for the 'me' object
// me.getBio = function () {
//     return 'fake bio'
// }

me.setName('Homer Simpson')
console.log(me.getBio())

const person = new Person('John', 'Doe', 51)

//changes the getBio function for all objects AFTER its been redefined
// Person.prototype.getBio = function () {
//     return 'testing bio'
// }

console.log(person.getBio())