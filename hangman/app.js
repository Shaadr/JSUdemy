//Games//
// const game1 = new Hangman('cat', 5, ['a', 'b', 'X'])
// const game2 = new Hangman('AiboHphobia', 100, ['a','invalid guess','B', 3])
const game3 = new Hangman('Car Parts', 5)


//Setup
const puzzleEl = document.querySelector('#puzzle')
const remainingGuesssesEl = document.querySelector('#remaining-guesses')
const guessesMadeEl = document.querySelector('#guesses-made')

const playGame = (game) => {
    puzzleEl.textContent = `Puzzle: ${game.puzzle}`
    remainingGuesssesEl.textContent = `${game.statusMessage}`
    guessesMadeEl.textContent = `${game.guessesMade === [] ? `Gueses: ${game.guessesMade}` : 'No Guesses Yet!'}`
    
    
    window.addEventListener('keypress', e => {
        const guess = String.fromCharCode(e.charCode)
        game.makeGuess(guess)
        game.addGuess(guess)
        puzzleEl.textContent = `Puzzle: ${game.puzzle}`
        remainingGuesssesEl.textContent = `${game.statusMessage}`
        guessesMadeEl.textContent = `Guesses: ${game.guessesMade}`
    })
}

//Play
playGame(game3)