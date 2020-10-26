// const todos = [
//     {
//         text: 'Order Dog Food',
//         completed: true
//     }, {
//         text: 'Feed Luna',
//         completed: true
//     }, {
//         text: 'Order Motherboard',
//         completed: false
//     }, {
//         text: 'Fix Computer',
//         completed: false
//     }, {
//         text: 'Find Eth 4OS Great Thresher',
//         completed: true
//     }]

let todos = [];

const filters = {
    searchText: '',
    hideComplete: false
}

const todosJSON = localStorage.getItem('todos')

if (todosJSON) {
    todos = JSON.parse(todosJSON)
}

// const todos = document.querySelectorAll('p')

// todos.forEach(todo => {
//     if(todo.textContent.toLowerCase().includes('buy')){
//         todo.remove()
//     } 
// });


//57
//create div for todos
//setup filters(searchText) and wire up a new filter input to change it
//create renderTodos fn to render and rerender the latest filtered data


const renderTodos = function(todos, filters) {
    const filteredTodos = todos.filter(todo => {
        //59 possible way to hide completed todos #3
        // const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        // const hideCompleteMatch = !filters.hideComplete || !todo.completed
        // return searchTextMatch && hideCompleteMatch
        
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    //59 possible way to hide completed todos #1 and #2
    // filteredTodos = filteredTodos.filter(todo => {// requires changes filteredTodos var to let from const
        //#1
        // if(filters.hideComplete) {
        //     return !todo.completed
        // } else {
        //     return true
        // }

        //#2
        // return !filters.hideComplete || !todo.completed
    // })

    // filteredTodos.forEach(todo => {
    //     const pTodo = document.createElement('p')
    //     pTodo.textContent = todo.text
    //     document.querySelector('#filtered-todos').appendChild(pTodo)
    // })

    const incompleteTodos = filteredTodos.filter(todo => {
        return !todo.completed
    })
    
    document.querySelector('#filtered-todos').innerHTML = ''

    const summary = document.createElement('h3')
    summary.textContent = `You have ${incompleteTodos.length} todos.`
    document.querySelector('#filtered-todos').appendChild(summary)
    
    filteredTodos.forEach(todo => {
        if (!filters.hideComplete || !todo.completed) {
            const p = document.createElement('p')
            if (todo.text.length <= 0) {
                p.textContent = 'Unnamed Todo'
            } else {
                p.textContent = todo.text
            }
            document.querySelector('#filtered-todos').appendChild(p)
        }
    })
}

renderTodos(todos, filters)

//53/54
//listen for new todo creation
// document.querySelector('#add-todo').addEventListener('click', e => {
//     todos.push({text:'New Blank Todo', completed: false})
//     console.log('new blank todo added')
//     console.log(todos)
// })

//listen for todo text input
// document.querySelector('#new-todo-text').addEventListener('input', e => {
//     console.log(e.target.value)
// })

document.querySelector('#filter-todo-input').addEventListener('input', e => {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

//58
document.querySelector('#add-todo-form').addEventListener('submit', e => {
    e.preventDefault();
    todos.push({
        text:e.target.elements.todoText.value, 
        completed: false
    })

    localStorage.setItem('todos', JSON.stringify(todos))

    renderTodos(todos,filters)
    e.target.elements.todoText.value = ''
})

//59
document.querySelector('#hide-me').addEventListener('change', e => {
    filters.hideComplete = !filters.hideComplete; //could also = e.target.checked which is probably better
    renderTodos(todos, filters)
})


