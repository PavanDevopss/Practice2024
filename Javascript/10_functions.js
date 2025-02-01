// console.log("P");
// console.log("a");
// console.log("v");
// console.log("a");
// console.log("n");

// function sayMyName (){
//     console.log("P");
//     console.log("a");
//     console.log("v");
//     console.log("a");
//     console.log("n");
// }

// sayMyName()

// function add2Numbers (num1 ,num2){
//     console.log(num1 + num2);
// }

// add2Numbers(2,3)
// add2Numbers(2,9)
// add2Numbers(2,"2")
// add2Numbers(2,"a")


// function add2Numbers(num1,num2,num3){
//     let result = (num1+num2+num3)
//     return result
// }
// const result = add2Numbers(2,0,0)
// console.log("Result: ", result);


// function add9nums(num1,num2,num3,num4,num5,num6,num7,num8,num9){
//     let result = (num1+num2+num3+num4+num5+num6+num7+num8+num9)
//     return result
// }

// const result = add9nums(50,150,400,1000,2500,6000,14000,26000,55000)
// console.log("total Invested Amount :", result);

// Key Difference:
// Calling a function just executes the code inside the function. 
// If there's no return, you don't get anything back.
// Using return allows the function to send a result back to where it was called, 
// so you can use that result.

// function multi2num(num10,num11){
//     let result1 = (num10*num11)
//     return result1
// }

// const result1 = multi2num(55000,2)

// console.log("Total Gained Amount", result1);

// function sub2num (num12,num13){
//     let result2 = (num12 - num13)
//     return result2
// }

// const result2 = sub2num(result1,result)

// console.log("Remained Profit", result2);

// function loginUserMessage(username){
//     console.log(`"${username} has just logged In"`);    
// }

// loginUserMessage("Pavan_K")

// function loginUserMessage(username){
//     if(username === undefined){
//         console.log(`"username is ${username} , please check"`);    
//         return
//         }
//         return `${username} Has Just Logged In`
// }

// // loginUserMessage()
// console.log(loginUserMessage("Pavan"));

// function bookMessage(msg1){
//     if(!msg1){
//         console.log(`Kindly please check your order ${msg1} hasn't booked yet try again`);
//         return
//     }
//        return (`congratulations ${msg1} your order has been booked Sir`)
// }

// // bookMessage()
// console.log(bookMessage());

// function bookMessage(msg1){
//     if(!msg1){ // this represents that input is not defined (undefined)
//         console.log(`Kindly please check your order ${msg1} hasn't booked yet try again`);
//         return
//     }
//        return (`congratulations ${msg1} your order has been booked Sir`)
// }

// // bookMessage()
// console.log(bookMessage("'Fasak'"));


// -----------------------------------------------practice-------------------------------------

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


// function addTwoNumbers(number1,number2){
//     // let result = (number1 + number2)
//     // return result 
//     return number1 + number2
//     // console.log("Pavan"); --> this will not print 
// }

// const result = addTwoNumbers(2,3)

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

// function fbUsername(username = "Thanu"){ // default value is thanu
//     if(!username){
//         console.log(" Username is not defined , Please enter : ");
//         return
//         }
//     return `Hi there ${username}, How are you ... Have a great day a head...`
// }

// console.log(fbUsername("Pavan")); // recent value is Pavan


// function calCartPrice(...num1){ //this three dots are known as ( rest operator )
//     return num1
// }

// console.log(calCartPrice(200,400,500,2000,5000));

// function calCartPrice(val1,val2, ...num1){ //this three dots are known as ( rest operator )
//     return num1
// }

// console.log(calCartPrice(200,400,500,2000,5000));

// const user = {
//     bookname: "OG",
//     price: 199
// }

// function handleObject(anyobject){
//     console.log(`Bookname is ${anyobject.bookname} and price is ${anyobject.price}`);
// }

// handleObject(user)
// console.log(handleObject(user));

const user = {
    bookname: "OG",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Bookname is ${anyobject.bookname} and price is ${anyobject.prices}`);
}

// handleObject(user)
handleObject({
    bookname: "Love",
    prices: 299
})



const myNewArray = [50,250,600,1500]
function returnSecondValue(anyArray){
    return anyArray[1]
}
console.log(returnSecondValue([22,26,28,99,107]));

// console.log(returnSecondValue(myNewArray));
