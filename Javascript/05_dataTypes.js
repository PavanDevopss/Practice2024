// // primative data types

// // There are 7 data types String, number, boolean, undefined, null, Symbol, BigInt. 

// const india = "vizag" 
// console.log(typeof india);

// const score = 100
// console.log(typeof score);

// const scoreValue = 100.3
// console.log(typeof scoreValue);

// const isLoggedIn = false
// console.log(typeof isLoggedIn);

// const myNum = 2836483929729174n
// console.log(typeof myNum);

// const outsideTemp = null
// console.log(typeof outsideTemp);

// const userEmail = undefined
// console.log(typeof userEmail);


// // non primitive datatypes in javascript

// // Array , object, function

// let myhero = ["Hanuman", "Shaktiman", "Naagraj"]
// console.log(typeof myhero);

// let myObj = {
//     name: "Pavan",
//     age: 26,
// }
// console.log(typeof myObj);

// let myFun = function(){
//     console.log("Hello_world");
// }
// console.log(typeof myFun);

// console.log("These are all the Datatypes in javaScript");


// // stack (Primitive datatype) and heap (Non Primitive datatype)

// let myHomeChannel = "JS_tutiorials"

// let mySecondChannel = myHomeChannel

// mySecondChannel = "ChinnuChannelts"

// console.log(myHomeChannel);
// console.log(mySecondChannel);


// let userOne = {
//     name: "Pavan",
//     age: 26,
//     email: "pavan@gmail.com",
//     upi: "pavan@ybl"
// }

// let userTwo = {
//     name: "chinnu",
//     age: 26,
//     email: "chinnu@gmail.com",
//     upi: "chinnu@ybl"
// }

// let userThree = userOne

// console.log(userOne);
// console.log(userTwo);
// console.log(userThree);

// let userFour = userOne

// userFour.email = "thanu@gmail.com"

// console.log(userOne);
// console.log(userTwo);
// console.log(userThree);
// console.log(userFour);

// *******************Next day Datatypes *********************

// const name = "Pavan"
// const repoCount = 22

// console.log( name + repoCount + " " + "Value" );

// const Value = 1000

// console.log( `Hai my name is ${name}, i have a repository of ${repoCount} in Count, do you want to now the value ?,its ${Value}` );

// const gameName = new String ("Pavanu@hike@com")

// console.log(gameName[0]);

// console.log(gameName.length);

// console.log(gameName.__proto__);

// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));

// console.log(gameName.toUpperCase().charAt(9));

// console.log(gameName.indexOf("k"));

// const newString = gameName.substring(0,4)
// console.log(newString);

// const anotherString = gameName.slice(-9,4)
// console.log(anotherString);

// const newOneString = "   PassKing  "
// console.log(newOneString);
// console.log(newOneString.trim());

// const editUrl = "https://www.youtube.com/&&&&list=PLu71S&&&KxNbfoB---uX3f4EOACle2y-tRC5Q37&&&index--=11"

// console.log(editUrl.replace("&&&&","REPLACED"));

// console.log(editUrl.includes("Chinnu"));
const gameName2 = new String ("tinku-jinku-linku-bunku")

console.log(gameName2.split("-",));



