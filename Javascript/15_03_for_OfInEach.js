// for of --> mostly used in arrays

// ["","",""]
// [{},{},{}]

const number = [1,2,3,4,5,6]

for (const num of number) {
    // console.log(num);
}

const greetings = "Hello_World_!"

for (const greet of greetings) {
    // console.log(`Each chart to form is: ${greet}`);
}

// Maps is non primitive datatype with unique values in given order

const oldMap = new Map

oldMap.set("IN", "India")
oldMap.set("USA", "America")
oldMap.set("Fr", "France")
oldMap.set("IN", "India")


// console.log(oldMap);

for (const [key,value] of oldMap) {
    //  console.log(`${key} is the Key and its pair is ${value}`);
}

const myObject = {
    game1 : "NFS",
    game2 : "Spiderman"
}

// for (const [key,value] of myObject) {
//     console.log(`${key} is the Key and its pair is ${value}`);
// }

//In the for of loop -- Objects are not iteratable


const myObjects = {
    js: "Javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObjects) {
    // console.log(`${key} shortcut for ${myObjects[key]}`);
}

const programming = ["js","rb","py","java","cpp"]

for (const key in programming) {
    // console.log(programming[key]);
}

// const map = new Map

// map.set("IN", "India")
// map.set("USA", "America")
// map.set("Fr", "France")
// map.set("IN", "India")

// for (const key in map) {
//     console.log(key);
// } ---> map is not iteratable in for in loop

const coding = ["js","ruby","python","java","cpp"]

// coding.forEach( function ( item ) {
//     console.log(item);
// } )

// coding.forEach( ( val ) => {
//     console.log( val );
// } )

// function printMe(items){
//     console.log(items);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index,arr) => {
//     console.log(item,index,arr);
// })

const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName:"js"
    },
    {
        languageName: "Java",
        languageFileName:"java"
    },
    {
        languageName: "Python",
        languageFileName:"py"
    },
]

myCoding.forEach((item)=>{
    // console.log(item.languageName);
})

// ------------------------------------------------Practice --------------------------------------------

// for of - loop

// const number = ["Pavan","Chinnu","Thanu","Jishna"]

// for (const num of number) {
//     console.log(num);
// }

// const num1 = [1,2,3,4,5,6,7,8,9,10]

// for (const num of num1) {
//     console.log(num);
// }

// const myString = "i love_kalabairavam_and_i_worshiphim_with_all_my_life";

// for (const str of myString) {
//     console.log(`The Value: ${str}`);
//     if (str === "_" ) {
//         console.log(`The Value: ${str} ,We have identifed the Space in between and stoped the loop`);
//         break;
//     }
// }


// const greetings = "Hello_World !!"

// for (const greet of greetings) {
//     console.log(greet);
// }


//----------------------------     Map       ------------------------------------------

const map1 = new Map

map1.set("love","Shiva")
map1.set("worship","kalabairavam")
map1.set("ideal","Sriram")
map1.set("Hope","charanam")

for (const [key,value] of map1) {
    // console.log(key,":-" ,value);
}

//----------------------------     for_in --> loop       ------------------------------------------


const myObjectie = {
    love: "kalabairavam",
    hate: "not_doing_work",
    trust: "Lord_kalabairavam",
    Hope: "Lord_Venkateshwara"
}

for (const key in myObjectie) {
    // console.log(`This is the Key Value: ${key}, This is the Pair value: ${myObjectie[key]}`);
}

const program = ["Jishna","Thanisha","Chinnu","Dinishley"]

for (const key in program) {
    // console.log(program[key]);
}

const mac = new Map

mac.set("God","Shiva")
mac.set("Goddess","Parvathi")
mac.set("elderson","ganesha")
mac.set("youngerson","Karthikeya")

for (const [key,value] in mac) {
    // console.log(key,value); --> This is not iterrateable in for in loop
}

//----------------------------     for_each --> loop       ------------------------------------------

const codelang = ["python","shell_script","Javascript","Ansible","CI_CD"]

codelang.forEach( function (item) {
    // console.log(item,"Executed in general function");
} )

codelang.forEach( (item) => {
    // console.log(item,"Executed in Arrow function");
} )

function printthis (val1) {
    // console.log(val1,"Executed by existing function");
}

// codelang.forEach(printthis)

codelang.forEach ( (items,index,arr) => {
    // console.log(items,index,arr);
} )

const myCodeLang = [
    {
        program:"python",
        fileTypes: "py"
    },
    {
        program:"shellscript",
        fileTypes: "sh"
    },
    {
        program:"Javascript",
        fileTypes: "js"
    },
    {
        program:"Ansible",
        fileTypes: "json"
    },
]

// myCodeLang.forEach( (key,value) => {
//     console.log(key,value);
// } )

// myCodeLang.forEach( (items) => {
//     console.log(items.program);
// } )

// Object.keys(myCodeLang).forEach((key) => {
//     console.log(key);
// }); --> This is not working 