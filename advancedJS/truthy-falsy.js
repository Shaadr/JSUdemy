//Truthy - values that resolve to true in boolean context
// i.e. true, numbers other than 0 including negatives,  "hi", {} (empty or full), [] (empty or full)
//Falsy - opposite of truthy
//i.e. false, 0, '' (empty string), null, undefined, NaN

if (-1 && [] && {} && 84 && true && {'chuck': 'norris'} && ['apples',3, 0, false]) {
    console.log('truthy')
} else {
    console.log('falsy')
}
