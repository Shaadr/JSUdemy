// DOM - Document Object Model
// Document = HTML Document
// Object = JavaScript
// DOM influences HTML (ie elements)
// Ojbect (JS) influences stuff that happens (js code) to stuff in DOM


//Query and Remove
// const p = document.querySelector('p') //matches first tag found
// p.remove();

//Query all and Remove
// const ps = document.querySelectorAll('p') // return array list of all matching tags
// ps.forEach(p => {
//     p.remove()
// })

//Log each elements text
// ps.forEach(p => {
//     console.log(p.textContent)
// })

//Changes all matching elements text
// ps.forEach(p => {
//     p.textContent = '*****'
// })

// const notes = [ 
//     {
//         title: 'My Next Trip',
//         body: 'I would like to go to the Netherlands'
//     }, {
//         title: 'Habbits to work on',
//         body: 'Exercise. Eating a bit better'
//     }, {
//         title: 'Office Modification',
//         body: 'Get a new seat'
//     }
// ]

let notes = [];

const filters = {
    searchText: ''
}

//63 Local Storage
//Check for existing data
const notesJSON = localStorage.getItem('notes')

if (notesJSON) {
    notes = JSON.parse(notesJSON)
}
    
//62 Local Storage CRUD
// localStorage.setItem('location','St George') //C & U
// console.log(localStorage.getItem('location'))  //R
// localStorage.removeItem('location') //D
// localStorage.clear() //removes all

// const user = {
//     name: 'Mike',
//     age: 30
// }
//
// localStorage.setItem('user', JSON.stringify(user))
// const getUser = JSON.parse(localStorage.getItem('user'))
// console.log(`${getUser.name} is ${getUser.age}`)

    
//52
//add new element
// const noteParagraph = document.createElement('p')
// noteParagraph.textContent = 'this is a new note paragraph element from JS'
// document.querySelector('body').appendChild(noteParagraph)


//53
// Event Handlers 
// document.querySelector('button').addEventListener('click', function(e) {
//     console.log(e.target.textContent = 'button was clicked')
// })

//54 
//problems selecting by tag
//this sucks, ie if someone moved order of tags in html 
// document.querySelectorAll('button')[1].addEventListener('click', e => {
//     console.log('delete all notes')
// })



const renderNotes = function(notes, filters) {
    const filteredNotes = notes.filter(note => {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(note => {
        const noteEl = document.createElement('p')

        if (note.title.length > 0) {
            noteEl.textContent = note.title
        } else {
            noteEl.textContent = 'Unnamed Note'
        }

        document.querySelector('#notes').appendChild(noteEl)
    })
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function(e) {
    notes.push({
        title: '',
        body: ''
    })
    localStorage.setItem('notes',JSON.stringify(notes))
    renderNotes(notes,filters)
})

// document.querySelector('#remove-all').addEventListener('click', function(e) {
//     document.querySelectorAll('.note').forEach(note => {
//         note.remove()
//     })
// })

document.querySelector('#search-text').addEventListener('input', e => {
    filters.searchText = e.target.value
    renderNotes(notes,filters)
})

// document.querySelector('#name-form').addEventListener('submit', e => {
//     e.preventDefault()
//     e.target.elements.firstName.value = ''
//     console.log(e.target.elements.firstName.value)
// })

// document.querySelector('#for-fun').addEventListener('change', e => {
//     console.log(e.target.checked)
// })

document.querySelector('#filter-by').addEventListener('change', e => {
    console.log(e.target.value)
})

/*
-- Single --
p
#replace
.item

-- Multiple --
p#order
button.inventory
h1#title.application
h1.application#title
*/

