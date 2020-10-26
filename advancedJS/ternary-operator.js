//can use to decide which functions to run
const myAge = 20
const showPage = () => {
    return 'showing the page'
}
const showErrorPage = () => {
    return 'showing the error page'
}

const message = myAge >= 21 ? showPage() : showErrorPage()
console.log(message)

//
const team = ['Tyler', 'Porter', 'Tom', 'Chuck']
const teamsize = team.length <= 3 ? `Teamsize: ${team.length} ` : 'Too many people on your team.'
console.log(teamsize)