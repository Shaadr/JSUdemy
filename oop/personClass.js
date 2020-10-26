'use strict'
//Class Constructor Rework
//myPerson --> Person.prototype --> Object.prototype --> null
class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}.`
        //this accesses its parent this value because it does not bind "this"
        this.likes.forEach( like => {
            bio += ` ${this.firstName} likes ${like}.`
        })
        return bio
    }

    set fullName(fullName) {
        let names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes) {
        super(firstName, lastName, age, likes)
        this.position = position
    }

    getBio() {
        return `${this.fullName} is a ${this.position}.`
    }

    getYearsLeft() {
        return 65 - this.age
    }
}

class Student extends Person {
    constructor(firstName, lastName, grade) {
        super(firstName, lastName)
        this.grade = grade
    }
    getBio() {
        const status = this.grade >= 70 ? 'PASSING' : 'FAILING'
        return `${this.firstName} ${this.lastName} is ${status} the class`
    }
    
    updateGrade(change) {
        this.grade += change
    }
}

const me = new Employee('Mike','Hanks', 30, 'Student', ['coding', 'gaming'])
me.fullName = 'Homer Simpson'
console.log(me.getBio())
console.log(me.getYearsLeft())

// const person = new Person('John', 'Doe', 51)
// console.log(person.getBio())

// const jordan = new Student("Jordan", "Hanks", 85)
// jordan.fullName = 'Charles Darwin'
// console.log(jordan.getBio())
// jordan.updateGrade(-20)
// console.log(jordan.getBio())


