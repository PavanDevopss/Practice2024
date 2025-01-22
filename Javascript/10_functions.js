// console.log("P");
// console.log("A");
// console.log("V");
// console.log("A");
// console.log("N");

// function sayMyName (){
//     console.log("T");
//     console.log("H");
//     console.log("A");
//     console.log("N");
//     console.log("U");
// }

// console.log("------------------------");

// sayMyName ---this is just referenace
// sayMyName() ---this executives
// console.log("------------------------");

// console.log(sayMyName());

// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);
    
// }
// console.log("");

// addTwoNumbers(5 ,9)
// addTwoNumbers(5 ,"2")
// addTwoNumbers(5 , "a")

// const result = addTwoNumbers(2,3)


function addTwoNumbers(number1,number2){
    // let result = (number1 + number2)
    // return result 
    return number1 + number2
    // console.log("Pavan"); --> this will not print 
}

const result = addTwoNumbers(2,3)

// console.log( "Result: ", result );

// console.log(addTwoNumbers(2,9));


// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("please enter a username"); 
//         return       
//     }
//     return `${username} has Just logged In`
// }

// console.log(loginUserMessage("pavan"));
// console.log(loginUserMessage());

// function fbUsername(username){
//     if(!username){
//         console.log(" Username is not defined , Please enter : ");
//         return
//         }
//     return `Please enter your username:  ${username}`
// }

// console.log(fbUsername());

function fbUsername(username = "Thanu"){
    if(!username){
        console.log(" Username is not defined , Please enter : ");
        return
        }
    return `Please enter your username:  ${username}`
}

console.log(fbUsername("Pavan"));
