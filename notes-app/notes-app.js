'use strict'

let notes = getSavedNotes();

const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', e => {
    const id = uuidv4()
    const timestamp = moment().valueOf()
    notes.push({
        id: id,
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp
    })
    savedNotes(notes)
    location.assign(`/edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', e => {
    filters.searchText = e.target.value
    renderNotes(notes,filters)
})

document.querySelector('#filter-by').addEventListener('change', e => {
    filters.sortBy = e.target.value
    renderNotes(notes, filters)
})

window.addEventListener('storage', e => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})





// 75 Moment.js
// const birthday = moment()
// birthday.year(1990).month(6).date(22)
// console.log(birthday.format("MMM DD, YYYY"))

// const now = moment()
// now.subtract(1,'week').subtract(20,'days')
// console.log(now.format('MMM Do, YYYY'))
// console.log(now.fromNow())
// const nowTimestamp = now.valueOf()

// console.log(moment(nowTimestamp).toString())

// Unix Epoch - January 1st 1970 00:00:00 (midnight)
// this time is 0 milliseconds, time increments, time before is negative

// const now = new Date();
// const timestamp = now.getTime()

// const myDate = new Date(timestamp)
// console.log(myDate.getFullYear())

// const pastDate = new Date('January 21 2001 6:25:01')
// const pastDate2 = new Date('July 22 1990 6:25:01')

// pastDateTimestamp = pastDate.getTime()
// pastDateTimestamp2 = pastDate2.getTime()

// const sooner = pastDateTimestamp < pastDateTimestamp2 ? pastDate: pastDate2
// console.log(sooner.toString())

// 74. Dates
// const now = new Date('January 21 2001 6:25:01')
// console.log(now.toString())
// console.log('year: ', now.getFullYear())
// console.log('month: ', now.getMonth())
// console.log('day: ', now.getDate())
// console.log('hour: ', now.getHours())
// console.log('minute: ', now.getMinutes())
// console.log('second: ', now.getSeconds())

// document.querySelector('#name-form').addEventListener('submit', e => {
//     e.preventDefault()
//     e.target.elements.firstName.value = ''
//     console.log(e.target.elements.firstName.value)
// })

// document.querySelector('#for-fun').addEventListener('change', e => {
//     console.log(e.target.checked)
// })

// document.querySelector('#remove-all').addEventListener('click', function(e) {
//     document.querySelectorAll('.note').forEach(note => {
//         note.remove()
//     })
// })


