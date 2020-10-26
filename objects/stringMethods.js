//includes method
let password = 'abcd123password098'
let pass = 'asfy2wg4q3s'
// console.log(password.includes('password'))
// console.log(pass.includes('password'))

//Trim  aka sanatize data as it comes in. also, toUpper, toLower, etc
let name = ' Mike ';
// console.log(name)
// console.log(name.trim());

let isValidPassword = function(string) {
    return (string.length > 8 && !string.includes('password'))
}

console.log(isValidPassword('asdfr'))
console.log(isValidPassword('#^#SpasswordSLgjdsl;f'))
console.log(isValidPassword('asd235256236qrwaerhgfr'))