'use strict'

const noteId = location.hash.substring(1)
const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeNoteElement = document.querySelector('#remove-note')
const updatedAtTimestamp = document.querySelector('#updatedAtTimestamp')

let notes = getSavedNotes()
let note = notes.find(note => note.id === noteId)

if (!note) {
    location.assign('/index.html')
}

titleElement.value = note.title
bodyElement.value = note.body
updatedAtTimestamp.textContent = generateLastEdited(note.updatedAt)

titleElement.addEventListener('input', e => {
    // const editedNote = notes.find(note => {
    //     return note.id === noteId
    // })
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    updatedAtTimestamp.textContent = generateLastEdited(note.updatedAt)
    savedNotes(notes)
})

bodyElement.addEventListener('input', e => {
    // const editedBody = notes.find(note => {
    //     return note.id === noteId
    // })
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    updatedAtTimestamp.textContent = generateLastEdited(note.updatedAt)
    savedNotes(notes)
})

removeNoteElement.addEventListener('click', e => {
    // const noteIndex = notes.findIndex(note => {
    //     return note.id === noteId
    // })
    removeNote(note.id)
    savedNotes(notes)
    location.assign('/index.html')
})

window.addEventListener('storage', e => {
    // debugger
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        let note = notes.find(note => {
            return note.id === noteId
        })
        
        if (!note) {
            location.assign('/index.html')
        }
        
        titleElement.value = note.title
        bodyElement.value = note.body
        updatedAtTimestamp.textContent = generateLastEdited(note.updatedAt)
    }
})