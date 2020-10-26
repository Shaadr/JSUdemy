let myBook = {
    title: "1984",
    author:"George Orwell",
    pageCount: 326
}

let otherBook = {
    title: "A Peoples History",
    author:"Howard Zinn",
    pageCount: 723
}

let getSummary = function(book){
    return {
        summary:`${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
    // console.log(`${book.title} by ${book.author}`)
}

// getSummary(myBook)
// getSummary(otherBook)

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

// console.log(bookSummary.pageCountSummary)

//challenge area

//create function - take f in - return obj w/ f,c,k

let convertFahrenheit = function (f) {
    return {
        fahrenheit: f,
        celsius: (f - 32) / 1.8,
        kelvin: (f - 32) / 1.8 + 273.15
    }
}

let temp = convertFahrenheit(74)
console.log(temp)
console.log(`Temperature of ${temp.fahrenheit} Fahrenheit converts to ${temp.celsius} Celsius and ${temp.kelvin} Kelvin`)


