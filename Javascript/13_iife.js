// Immediate Invoked Function Expression (IIFE)

//------------------------ Immediately Invoked Function Expression (IIFE)--------------------------------------
// create a function to print string operators (DB Connected)
// converted the created a function to IIF Syntax () ();
// Pass name var in created a function to IIF Syntax () ();
// create a arrow function  of converted the created a function to IIF Syntax () ();
// Write a two IIFE in same function file and execute it

// () (); ---> () -> 1st used for definition () -> 2nd used for execution , 
// using 2 parathesis and ; semicolon for IIFE function


// function chai(){
//     let username = "Pavan"
//     console.log(`Hi there ${this.username}, how are your, shall we get the transaction done ??`);
//     }
// chai()

(function chai(){
    console.log(`Hi there your have successfully Connected to DB !! `);
} ) ();

(function aurCode(){
    console.log(`Shall we get the transaction done ??`);
} ) ();

( () => {
    console.log(`This is Arrow function using in IIFE `);
    // console.log(this);
} ) ();

( () => {
    console.log(`This is Arrow function using in IIFE `);
    // console.log(this);
} ) ();

((name) => {
    console.log(`Hi there ${name} `);
    }) ("Pavan");