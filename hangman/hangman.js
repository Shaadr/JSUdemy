class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = 'playing'
        this.guessesMade = []
    }
    get statusMessage () {
        if (this.status === 'failed') return `Nice try! The word was "${this.word.join('')}"`
        if (this.status === 'finished') return `Great Work! You guessed the word!`   
        return `Guesses left: ${this.remainingGuesses}.`
    }
    getStatus() {
        const finished = this.word.every(letter => this.guessedLetters.includes(letter) || letter === ' ')

        if (this.remainingGuesses <= 0) {
            this.status = 'failed'
        } else if (finished) {
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }
    }
    get puzzle() {
        let puzzle = ''
        this.word.forEach(letter => {
            this.guessedLetters.includes(letter) || letter === " " ? puzzle += letter : puzzle += '*'
        })
        return puzzle
    }
    makeGuess(guess) {
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.word.includes(guess)
        
        if (this.status !== 'playing') return
    
        if (isUnique) {
            this.guessedLetters.push(guess)
        }
    
        if(isUnique && isBadGuess) {
            this.remainingGuesses--
        }
        
        this.getStatus()
    }
    addGuess(guess) {
        guess = guess.toLowerCase()
        if (this.guessesMade.includes(guess)) {
            alert(`Letter ${guess} already guessed! Make a different guess`)
        }
        if (!this.guessesMade.includes(guess)) {
            this.guessesMade.push(guess)
        }
    }
    
}

// const Hangman = function (word, remainingGuesses, guessedLetters = []) {
//     this.word = word.toLowerCase().split('')
//     this.remainingGuesses = remainingGuesses
//     this.guessedLetters = guessedLetters
//     this.status = 'playing'
// }






