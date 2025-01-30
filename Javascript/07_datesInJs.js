// Dates

let myDate = new Date ();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.getTimezoneOffset());

// console.log(myDate.toString());
// console.log(typeof myDate);
// console.log(myDate.toLocaleTimeString());

// let myCreDate = new Date (2023, 0, 22)
let myCreDate = new Date (2023, 1, 22, 6, 30)
// let myCreDate = new Date ("2024-09-26")
// let myCreDate = new Date ("09-26-2025")
// console.log(myCreDate);
// console.log(myCreDate.toString());
// console.log(myCreDate.toLocaleString());
// console.log(myCreDate.getTime());
// console.log(myCreDate.getDate());
// console.log(myCreDate.getDay());
// console.log(myCreDate.getFullYear());
// console.log(myCreDate.getHours());
// console.log(myCreDate.getMilliseconds());
// console.log(myCreDate.getMinutes());

let myTimeStamp = Date.now();
// console.log(myTimeStamp.toString());
// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(AnewDate.getDate());

// console.log((`${newDate.getDate()} is todays day for you to start the work Bhavani`));

newDate.toLocaleString('default',{
        weekday: "long",
        day: "2-digit",
        hour: "numeric"
}
)

console.log((`${newDate.getDate()} is todays day for you to start the work Bhavani`));
