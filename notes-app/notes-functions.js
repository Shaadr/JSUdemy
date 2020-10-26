'use strict'

//Get existing notes from localStorage
const getSavedNotes = () => {
    const notesJSON = localStorage.getItem('notes')

    try {
        return notesJSON ? JSON.parse(notesJSON) : []
    } catch (e) {
        return []
    }
}

//Save the notes to localStorage
const savedNotes = notes => localStorage.setItem('notes', JSON.stringify(notes))

//Remove Note
const removeNote = id => {
    const noteIndex = notes.findIndex(note => note.id === id)

    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}

// Generate the DOM structure for a note
const generateNoteDOM = note => {
    const noteEl = document.createElement('div')
    const textEl = document.createElement('a')
    const button = document.createElement('button')

    //Setup the remove note button
    button.textContent = 'x'
    noteEl.appendChild(button)
    button.addEventListener('click', () => {
        removeNote(note.id)
        savedNotes(notes)
        renderNotes(notes,filters)
    })


    //Setup the note title text
    textEl.setAttribute("href",`/edit.html#${note.id}`)
    if (note.title.length > 0) {
        textEl.textContent = note.title
    } else {
        textEl.textContent = 'Unnamed Note'
    }
    noteEl.appendChild(textEl)

    return noteEl
}

//Sort notes by dropdown (3 ways)
const sortNotes = (notes, sortBy) => {
    if (notes == null || sortBy == null) return;
    //sort by edited
    if (sortBy === 'byEdited') {
        return notes.sort((a, b) => {
            if (a.updatedAt > b.updatedAt) return -1
            if (a.updatedAt < b.updatedAt) return 1
            return 0
        })
    } else if (sortBy === 'byCreated') {
        return notes.sort((a, b) => {
            if (a.createdAt > b.createdAt) return -1
            if (a.createdAt < b.createdAt) return 1
            return 0
        })
    } else if (sortBy === 'alphabetical') {
        return notes.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) return -1
            if (a.title.toLowerCase() > b.title.toLowerCase()) return 1
            return 0
        })
    } else {
        return notes
    }   
}

//Render application Notes
const renderNotes = (notes, filters) => {
    notes = sortNotes(notes, filters.sortBy)
    const filteredNotes = notes.filter(note => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(note => {
        const noteEl = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteEl)
    })
}

//Generate teh last edited message
const generateLastEdited = timestamp => `Last edited ${moment(timestamp).fromNow()}.`