// const notes = ['Note 1', 'Note 2', 'Note 3'];
const notes = [ 
{
    title: 'My Next Trip',
    body: 'I would like to go to the Netherlands'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better'
}, {
    title: 'Office Modification',
    body: 'Get a new seat'
}]

const sortNotes = function(notes) {
    notes.sort(function(a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}

sortNotes(notes)
console.log(notes)

const findNote = function(notes, title) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === title.toLowerCase()
    })
}
const findNotes = function(notes, query) {
    return notes.filter(function (note,index) {
        let isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        let isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        // console.log(`${note.title}: titleMatch: ${isTitleMatch}, bodyMatch: ${isBodyMatch}`)
        return isTitleMatch || isBodyMatch
    })
}

// console.log(findNotes(notes, 'o'))

// const findNote = function(notes, title) {
//     const index = notes.findIndex(function(note, index) {
//         return note.title.toLowerCase() === title.toLowerCase()
//     })
//     return notes[index]
// }

// const note = findNote(notes, "some other Office Modification")
// console.log(note)

// notes.push('My new Note') // add to end
// notes.pop() // remove last element
// notes.unshift('my first note') // add to beggining

// notes.splice(1,1) // start at index 1 and remove 1 item
// notes.splice(1, 0, "this is the new 2nd item") // start at i:1, remove nothing, and add "his is the new second item" at i++
// notes.splice(1,1,'replace with this new note')// start at i:1, remove item at i:1, and replace it with "replace with new note"

// notes[2] = 'this is now the new note 3'

// notes.forEach(function(note,index) {
//     console.log(index,note)
//     // console.log(note)
// })

// console.log(notes)

// for (let i = 0; i < notes.length; i++) {
//     console.log(notes[i])
// }

//objects are only equal to other objects if they are the exact same object in memory, not that they have the same properties
// console.log(notes.indexOf({}))  -> -1  instead, use object.findIndex()
// console.log({} === {}) -> false

// let someObject = {}
// let otherObject = someObject
// console.log(someObject === otherObject) -> true

// const index = notes.findIndex(function(note, index) {
//     // console.log(note)
//     return note.title === 'Office Modification'
// })
// console.log(index)
