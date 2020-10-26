'use strict'

//Get existing Todos from localStorage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos')
    try {
        return todosJSON ? JSON.parse(todosJSON) : []
    } catch (e) {
        return []
    }
}

//Save todos to localStorage
const saveTodos = todos => localStorage.setItem('todos', JSON.stringify(todos))

//Toggle todo.completed by id
const toggleTodo = id => {
    const todo = todos.find(todo => todo.id === id)
    if(todo) todo.completed = !todo.completed
}

//Remove Todo by id
const removeTodo = id => {
    const todoId = todos.findIndex(todo => todo.id === id)
    if(todoId > -1) {
        todos.splice(todoId, 1)
    }
}

//Render application todos based on filters
const renderTodos = (todos, filters) => {
    const filteredTodos = todos.filter(todo => todo.text.toLowerCase().includes(filters.searchText.toLowerCase()))

    const incompleteTodos = filteredTodos.filter(todo => !todo.completed)

    document.querySelector('#filtered-todos').innerHTML = ''
    document.querySelector('#filtered-todos').appendChild(generateSummaryDOM(incompleteTodos))

    filteredTodos.forEach(todo => {
        if (!filters.hideComplete || !todo.completed) {
            document.querySelector('#filtered-todos').appendChild(generateTodoDOM(todo))
        }
    })
}

//Get the DOM elements for an individual todo
const generateTodoDOM = todo => {
    const todoContainer = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')

    //setup todo checkbox
    checkbox.setAttribute("type", "checkbox")
    checkbox.checked = todo.completed
    todoContainer.appendChild(checkbox)
    checkbox.addEventListener('change', e => {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    //setup Todo text
    if (todo.text.length <= 0) {
        todoText.textContent = 'Unnamed Todo'
        todo.text = 'Unnamed Todo'
    } else {
        todoText.textContent = todo.text
    }
    todoContainer.appendChild(todoText)

    //setup remove todo button
    removeButton.textContent = 'x'
    todoContainer.appendChild(removeButton)
    removeButton.addEventListener('click', () => {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    return todoContainer
}

//Get the DOM elements for list summary
const generateSummaryDOM = incompleteTodos => {
    const summary = document.createElement('h3')
    summary.textContent = `You have ${incompleteTodos.length} todos.`
    return summary
}
