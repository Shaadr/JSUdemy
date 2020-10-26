const todos = [
{
    text: 'Order Dog Food',
    completed: true
}, {
    text: 'Feed Luna',
    completed: true
}, {
    text: 'Order Motherboard',
    completed: false
}, {
    text: 'Fix Computer',
    completed: false
}, {
    text: 'Find Eth 4OS Great Thresher',
    completed: true
}]

// console.log(`you have ${todos.length} todos`)

// console.log(todos[todos.length - 1])
// console.log(todos[0])

// todos.splice(2,1)
// todos.push('Eat Dinner')
// todos.shift()

// todos.forEach(function(todo,index) { //forEach array specific function
//     console.log(`${index + 1}.`,todo)
// })

// for (let i = 0; i < todos.length; i++) {
//     const element = todos[i];
//     console.log(`${i+1}.`, element)
// }

// console.log(todos)

//43 challenge:
//1. convert array to array of objects -> text, completed flag
//2. create function to remove todo by text value
// ie: deleteTodo(todos, `Feed Luna`) - > deletes  feed luna todo

const deleteTodo = function (todos , text) {
    const index = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === text.toLowerCase()
    })
    if (index > -1) {
        todos.splice(index, 1)
    }
}

const sortTodos = function (todos) {
    todos.sort(function(a,b) {
        if(!a.completed && b.completed) {
            return -1
        } else if (a.completed && !b.completed) {
            return 1
        } else {
            return 0
        }
    })
}
console.log(sortTodos(todos))
console.log(todos)


// deleteTodo(todos,'feed luna')
// console.log(todos)

//44 challenge
//get just uncompleted todos
const getThingsTodo = function(todos) {
    return todos.filter(function(todo, index) {
        return !todo.completed
    })
}

// console.log(getThingsTodo(todos))