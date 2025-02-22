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

// ----------------------------------------------------Practice ---------------------------------------------------------------


//  let userRatingGiven = 5
//  userNameGiven = "Pavan"

//  if (userRatingGiven) {
//     console.log(`Hi there ${userNameGiven}, Thankyou for giving the best user rating `);
//     }else {
//     console.log(`Thankyou for your feedback ${userNameGiven} sir, we will definately improve u service`);
// }


// switch (userRatingGiven) {
//     case 1:
//         console.log(`Thankyou for your feedback sir, 1 rating , We will Improve to get better next time sir`);
//         break;
//     case 2:
//         console.log(`Thankyou for your feedback sir, 2 rating ,We will Improve to get better next time sir`);
//         break;
//     case 3:
//         console.log(`Thankyou for your feedback sir, 3 rating ,We will Improve to get better next time sir`);
//         break;
//     case 4:
//         console.log(`Thankyou for your feedback sir, 4 rating ,We will Improve to get better next time sir`);
//         break;
//     case 5:
//         console.log(`Thankyou for your Rating sir, 5 rating ,We will Maintain This as a Benchmark `);
//         break;

//     default:
//         console.log(`We haven your recomendations as taken feedback, will Improve to get better next time sir, Thankyou so much`);
//         break;
// }

// let val1;
// val1 = null ?? 10

// console.log(`This the value of ${val1}, Thankyou`);

// condition ? true : false

// const iceTeaPrice = 100
// iceTeaPrice >= 80 ? console.log(`Price of the Ice Tea is Greater than 80`) : console.log(`Price of the Ice Tea is lesser than 80`)

