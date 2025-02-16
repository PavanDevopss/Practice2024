const userEmail = "P@Pavan.ai" // []

if (userEmail) {
    console.log("got user email"); 
} else {
    console.log("Dont have a email");
}

// falsy Values

// false, 0, -0, Bigint 0n, "", null , undefined, NaN

// truthy values
// "0", "false"," ",{},[], function (){}

// you can check all the values in internet browser


if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length ===0 ) {
    console.log("Object is empty");
}