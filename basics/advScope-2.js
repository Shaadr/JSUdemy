//Global
    //Local
        //Local
    //Local

    // let name = 'Mike'

    if (true) {
        // let name = 'Andrew'
        if (true) {
            //let name = "Jen";  if we did this, then the first clg would print jen, but the second would fail b/c outside scope
            name = "Jen";  
            console.log(name) // prints Jen
           
        }
        
    }
    
    if (true) {
        console.log(name) // prints Jen
    }

    /* this is a big problem. 
     Since line 11 calls for a variable "name" that does not exit
     JS will search the parent and all ancestors till it finds the "name" var
     since it doesnt find it in root Global variables, it will declare it there
     this is why both clogs will print Jen even though it hasn't been declared
    */