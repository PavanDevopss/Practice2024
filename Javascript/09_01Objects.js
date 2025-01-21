// singleton- constuctor

// object.create

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Pavan",
    "full_name": "Vadala Pavan kumar",
    age: 19,
    [mySym]: "myKey1",
    location: "Vizag",
    email: "pavan.google.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(jsUser);
// console.log(jsUser.name);
// console.log(jsUser["full_name"]);
// console.log(jsUser["email"]);
// console.log(jsUser.mySym);
// console.log(jsUser[mySym]);
// console.log(typeof jsUser[mySym]);

// jsUser.email = "iampavan.blue@gmail.com"
// Object.freeze(jsUser)
// jsUser.email = "iampavan.red@gmail.com"

// console.log(jsUser);

jsUser.greeting = function(){
    console.log(`Hai hello there`,"Hai there jsUser");
}
jsUser.greetingTwo = function(){
    console.log(`Hai hello there ${this.full_name}`);
}
jsUser.greetingThree = function(){
    console.log(`Hai hello there ${this["email"]}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
console.log(jsUser.greetingThree());
