//Global
    //Local
        //Local
    //Local

let name = 'Mike'

if (true) {
    let name = 'Andrew'
    if (true) {
        // name = "Jen";  //Will reassign the "Andrew" var to "Jen", NOT the "Mike" var
        console.log(name) //prints "Andrew" b/c uses local scope var. this is called "variable shadowing"
        // let name = "Janet";  initializing name var after execution will throw error
    
    }
    
}

if (true) {
    console.log(name) // prints "Mike"
}