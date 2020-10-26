//Lexical Scope (static scope)
//Global Scope - Defined outside of all code blocks
//Local Scope - Defined inside code block

//In a scope you can access variables defined in that scope or any parent/ancestor scope.

//Global Scope (var1)
    //Local Scope (var2, var1)
        //Local Scope (var4, var2, var1)
    //Local Scope (var3 , var1)

let var1 = 'var1'; //global var

if (1) {
    let var2 = 'var2'; //local var
    console.log(var1);
    console.log(var2);

    
    if(1) {
        let var4 = 'var4'
        console.log(var4);
        console.log(var2);
        console.log(var1)
    }
}

if (1) {
    let var3 = 'var3'
    console.log(var3);
    console.log(var1);
}