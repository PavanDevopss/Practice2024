const marvelHeroes = ["IronMan","SpiderMan","Dockerstrange"]
// console.log(marvelHeroes);

const dcHeroes = ["SuperMan","Shazam","GreenLantern","Wonderwomen"]
// console.log(dcHeroes);

// marvelHeroes.push(dcHeroes);
// console.log(marvelHeroes);
// console.log(marvelHeroes[3][2]);

const all_heroes = marvelHeroes.concat(dcHeroes);
// console.log(all_heroes);

const all_super_heroes = [...marvelHeroes,...dcHeroes,...all_heroes];
// console.log(all_super_heroes); // spread operator 

const Jerry = [1,2,3,4,5,[1,2,3],23,43,23,[12,34,53,23,[32,23,442,234,443,223]],0,2,4,2]

const newJerry = Jerry.flat(Infinity);
// console.log(newJerry);

// The flat() method in JavaScript is used to "flatten" an array, meaning it 
// combines all nested arrays into a single array.
// By default, flat() only flattens one level of nesting, 
// but flat(Infinity) tells JavaScript to flatten the array completely, 
// no matter how deeply nested it is.

const pinku = ("Pavankumar-devotiee_ofbairav");
// console.log(Array.isArray(pinku)); // give true or false as output

Array.isArray(pinku)
// This checks if pinku is an array.
// Array.isArray() is a method that returns true if the value you pass is an array, and false otherwise.
// Since pinku is a string (not an array), the result will be false.

// console.log(Array.from(pinku));

Array.from(pinku)
// This converts the string pinku into an array.
// Array.from() creates a new array from an iterable (like a string, which is iterable character by character).
// So, if you have the string "Pavankumar-devotiee_ofbairav", it will turn into an array of characters:
// ['P', 'a', 'v', 'a', 'n', 'k', 'u', 'm', 'a', 'r', '-', 'd', 'e', 'v', 'o', 't', 'i', 'e', 'e', '_', 'o', 'f', 'b', 'a', 'i', 'r', 'a', 'v'].
// console.log(Array.from({name:"pinku"})); // its not creating the array due to object is inserted in array

Array.from({name: "pinku"})
// console.log(Array.from({name: "pinku"}));
// This tries to convert an object {name: "pinku"} into an array.
// However, since Array.from() works with iterables (like arrays, strings, or anything that has a Symbol.iterator), the object {name: "piku"} doesn’t have that.
// The result will be an empty array [].
// console.log(Array.from ([1,2,[1,2,3],23,[12,34,[32,23,223]],0,2])); // this will be done because there are literates


//  ---------------------------------------------------------------------------------------------

const score1 = 100;
const score2 = 200;
const score3 = 300;

const numPa = [score1,score2,score3];

console.log(numPa);

console.log(Array.of(score1,score2,score3));


// Key Difference:
// numPa is an array you created manually using the square brackets [].
// Array.of() creates an array from the values passed as arguments. (score1,score2,score3)

// take a value and push for array output, use concat, spread, flat(infinity), of --> methods