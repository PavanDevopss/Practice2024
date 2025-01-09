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

const piku = ("Pavankumar-devotiee_ofbairav");
// console.log(Array.isArray(piku));
// console.log(Array.from(piku));
// console.log(Array.from({name:"piku"})); // its not creating the array due to object is inserted in array

const score1 = 100;
const score2 = 200;
const score3 = 300;

const numPa = [score1,score2,score3];
console.log(numPa);

console.log(Array.of(score1,score2,score3));


// take a vale and push for array output, use concat, spread, flat(infinity), of --> methods