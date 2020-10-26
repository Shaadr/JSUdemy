const getTip = amount => {
    if (typeof amount === 'number') {
        return amount * 0.25 
    } else {
        throw Error('Argument Invalid: must be a number')
    }
}

try {
    // const result = getTip(true) //->returns 1 * 0.25 if no check
    const result = getTip(2)
    console.log(result)
} catch (e) { //only runs if try block errors
    console.log('catch block is running')
}

