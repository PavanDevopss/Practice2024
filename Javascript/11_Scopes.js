let a = 10
const b = 20
var c = 30
d = 60

if (true){
    let a = 100
    const b = 200
    var c = 400
    d = 600
    // console.log(`Inner scope value: ${a}`);
    // console.log(`Inner scope value: ${b}`);
    // console.log(`Inner scope value: ${c}`);
    // console.log(`Inner scope value: ${d}`);
    }

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);


function one(){
    const username = "Pavan"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    
// two()

}

// one()


if(true){
    const username = "Thanu"
    if(username==="Thanu"){
        const website = "Foodie"
        // console.log(`${username} is ${website}`);
        }
        // console.log(website);
}
// console.log(username);

console.log(addone(5));

function addone(num){
    return num + 1
}


// console.log(addtwo(2));

const addtwo = function(num){
    return num + 2
}

// addtwo(2)
console.log(addtwo(2));