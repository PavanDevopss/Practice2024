// array

const myArr = [-0,0,"Pavan",1,2,3,4,5]
const myHero = ["Hanuman", "IronMan", "Spiderman"]
const myArr2 = new Array(1,2,3,4)

// console.log(myArr);
// console.log("------------1st-----------");
// console.log(myArr[0]);
// 
//                                            // Array methods
//
// 
//  console.log("------------2nd-----------");

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// console.log(myArr);
// console.log("------------Original-----------");

// myArr.unshift(9)
// console.log(myArr);
// console.log("------------after(unshift)-----------");

// myArr.shift()
// console.log(myArr);
// console.log("------------after(shift)-----------");

// myArr.shift()
// console.log(myArr);
// console.log("------------after(shift)-----------");

// console.log(myArr.includes(0));
// console.log(typeof myArr.includes(0));  // boolean value

// console.log(myArr.indexOf("Pavan"));
// console.log(typeof myArr.indexOf("Pavan")); //String value
// console.log(typeof myArr.indexOf(3)); // integer value

const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof myArr);
// console.log("---------------change of method into join---------------");
// console.log(newArr);
// console.log(typeof newArr); // value is changed to string

// slice , splice 

// console.log("---------------Original---------------");
// const myn = myArr
// console.log("original-Input",myArr);
// console.log("a:",myn);
// console.log(typeof myn);

// console.log("---------------Slice---------------");
// const myn1 = myArr.slice(1,5)
// console.log("original-Input",myArr);
// console.log("b:",myn1);
// console.log(typeof myn1);

// console.log("---------------Splice---------------");
// const myn2 = myArr.splice(1,5)
// console.log("original-Input",myArr);
// console.log("c:",myn2);
// console.log(typeof myn2);


// myArray

const myArray = ["Pavan",1,2,3,4,5,6,7,8,9]
// console.log(myArray);

const myHeros = ["Hanuman", "Krishna", "Kalabairavam"]
// console.log(myHeros);

const myArray2 = new Array(1,2,3,4,5,6,7,8,9)
// console.log(myArray2);

// console.log(myArray[0]);
// console.log(myHeros[0]);
// console.log(myArray2[0]);

                                           // Array Methods //


// push , pop , shift , unshift , include, index , join // Slice & splice

// myArray.push(10)
// console.log(myArray);
// myArray.push(11)
// console.log(myArray);
// myArray.push(12)
// console.log(myArray);

// myArray.pop()
// console.log(myArray);
// myArray.pop()
// console.log(myArray);
// myArray.pop()
// console.log(myArray);

// myArray.unshift("Kalabairav")
// console.log(myArray);
// myArray.unshift("Shivaya")
// console.log(myArray);
// myArray.unshift("Durgamaa")
// console.log(myArray);

// myArray.shift()
// console.log(myArray);
// myArray.shift()
// console.log(myArray);
// myArray.shift()
// console.log(myArray);

const myArray3 = ["Pavan",1,2,17,4,5,16,7,8,9,6]


// console.log(myArray3.includes(5)); // gives the output in boolean value
// console.log(typeof myArray3.includes);

// console.log(myArray3.indexOf("Pavan")); // gives the output as values place in number
// console.log(typeof myArray3.indexOf(9));

const newArray1 = myArray3.join()
// console.log("remained in Object", myArray3);
// console.log(typeof myArray3);
// // console.log("---------------change of method into join---------------");
// console.log("Changed into string" , newArray1);
// console.log(typeof newArray1);


// Slice & splice

// const myArray = ["Pavan",1,2,3,4,5,6,7,8,9]

console.log("This is the Practice of slice and splice");

const zum = myArray
console.log(myArray);
console.log(typeof myArray);
console.log(zum);
console.log(typeof zum);
console.log("This is the Original on both myArray & zum");

const zum1 = myArray.slice(1,4);
console.log("This is the Original",myArray);
console.log("After slice this is the output",zum1);
console.log(typeof zum1);

const zum2 = myArray.splice(1,4);
console.log("This is the Original", myArray);
console.log("After Splice this id the Output", zum2);
console.log(typeof zum2);

