// 04. Declare three variables, one using let, one using var, and one using const, all inside a block scope. Assign
// them values and log their values to the console before and after they are declared to demonstrate variable
// hoisting.
{

    console.log(a); //ReferenceError: Cannot access 'x' before initialization
    console.log(b);// ReferenceError: Cannot access 'x' before initialization
    console.log(c);// ReferenceError: Cannot access 'x' before initialization
    
    var a = "Sachin";
    let b = "Sharmaji";
    const c = 123;
    
    
    console.log(a); //Sachin
    console.log(b); //Sharmaji
    console.log(c); //123
    



}

