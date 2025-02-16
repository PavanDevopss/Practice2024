// Nullish Coalescing Operator (??) : null  undefined

let val1;

val1 = 5 ?? 10
val1 = null ?? 10
val1 = null ?? 5 ?? 15
val1 = null ?? undefined ?? 2
val1 = null ?? undefined ?? "2"

// console.log(val1);

// Turniary Operatory

// condition ? true : false

const iceTeaPrice = 150

iceTeaPrice <= 100 ? console.log("Less than 100 rupees") : console.log("More Than 100 Rupees");

