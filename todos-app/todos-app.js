'use strict'

let todos = getSavedTodos()

const filters = {
    searchText: '',
    hideComplete: false
}

renderTodos(todos, filters)

document.querySelector('#filter-todo-input').addEventListener('input', e => {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#add-todo-form').addEventListener('submit', e => {
    e.preventDefault();
    todos.push({
        id: uuidv4(),
        text:e.target.elements.todoText.value, 
        completed: false
    })
    saveTodos(todos)
    renderTodos(todos,filters)
    e.target.elements.todoText.value = ''
})

document.querySelector('#hide-me').addEventListener('change', e => {
    filters.hideComplete = !filters.hideComplete; //could also = e.target.checked which is probably better
    renderTodos(todos, filters)
})


