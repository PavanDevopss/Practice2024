// const user = {
//         username: "Pavan",
//         Price: 99,
//         welcomeMessage: function() {
//                 console.log(`Hai there ${this.username}, Welcome to Our Website`);
//                 console.log(this);
//         }
// }

        
// user.welcomeMessage()
// user.username = "Thanu"
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     let username = "Pavan"
//     console.log(this);
// }

// chai()

// const chai = function (){
//     let username = "Pavan"
//     console.log(this.username);
// }

// chai()

// const biscuit = () => {
//     let username = "Jishnu"
//     console.log(this.Jishnu);
// }
// biscuit()

// const addTwo = function (num1,num2){
//     return num1 + num2
// }
// console.log(addTwo(3,4));


// const addTwoNums = ( num1,num2 ) => ( num1 + num2 )
// console.log(addTwoNums(3,8));


const addTwoValues = (num1,num2) => ({Username:"Pavan"})
// console.log(addTwoValues(4,5));
console.log(addTwoValues());

// The Simple Key Difference:
// Regular functions: The value of this depends on how the function is called (who you're pointing at).
// Arrow functions: The value of this is set when the function is created, and it does not change.
