const tubba = ('take a value and push for array output, use concat, spread, flat(infinity), is , from , of --> methods')
console.log(tubba);


const tabi = ["Zumba","Aerobics","Karate", "kungfu"];

const tabi2 = ["Pavan","Lokesh","Thanu","Mango","Apple","Pineaaple","guva"]

// console.log(tab);
// console.log(tab2);

// tabi.push(tabi2);
// console.log(tabi);

// tabi.concat(tabi2);
// console.log(tabi[4][0]);

// const teba = tabi.concat(tabi2);
// console.log(teba);

// const teba1 = (Array.isArray(tabi));
// console.log(teba1);

// const puli = "Ram"
// const teba2 = (Array.isArray(puli));
// console.log(teba2);


const teball = [...tabi,...tabi2];
// console.log(teball);

const pilli = ("there is a lion is the forest")

console.log(Array.from(pilli));
console.log(Array.isArray(pilli));
// console.log(Array.of(pilli));

const a1 = 100
const a2 = 200
const a3 = 300
const a4 = 400

console.log(Array.of(a1,a2,a3));
