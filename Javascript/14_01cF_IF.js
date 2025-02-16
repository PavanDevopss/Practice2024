// if

// if (true) {
//         let username = "Pavan"
//         console.log(`Hai there ${username} ,How are you sir`);
// }

// const isUserLoggedIn = true

// if (isUserLoggedIn) {
//     console.log("executed"); 
// }

// if ( 2 == "2") {
//     console.log("executed"); 
// }

// if ( 2 === "2") {
//     console.log("executed"); 
// }

// if ( 2 !== 3 ) {
//     console.log("executed"); 
// }

// 2 <= 2
// 3 != 2

// < , > , <= , >= , == , !=, ===

// let heyUserLoggedIn = true
// let temparature = 51

// if (temparature <= 50) {
//     console.log("less than 50"); 
// } else {
//     console.log("temperature is graeter than 50");
// }

// console.log("Executed");


// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`User Power: ${power}`);
// }

// console.log(`User Power: ${power}`); --> this variable is out of scope
// with var it will be global, but no with let or const


// short hand notation

// const balance = 1000

// if (balance > 500) console.log("test"), console.log("test");
//  implicit scope code --> not a good practice


// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750 ) {
//     console.log("less than 750");
// }else if (balance < 900 ) {
//     console.log("less than 900");
// }
// else if (balance < 1000 ) {
//     console.log("less than 1000");
// }else {
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true


if (userLoggedIn && debitCard ) {
    console.log("Allowed to purchase the course");   
}

// && --> this symbol and and checks all the condition is true

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User Logged In : Is Allowed");
}

// || --> this is pipe symbol OR condition in code, checks any one of the condition is true


// ------------------------------------------- Practice -----------------------------------------------

