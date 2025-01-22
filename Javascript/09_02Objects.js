// const tinderUser0 = new Object()
// const tinderUser1 = {}
// console.log(tinderUser0);
// console.log(tinderUser1);

const tinderUser = {}

tinderUser.id = "12936abc"
tinderUser.name = "Somu"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const fBUser = {
    email:"pspk@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Vadala",
            middlename:"Pavan",
            lastname:"Kumar"
        }
    }
}

// console.log(fBUser);
// console.log(fBUser.fullname);
// console.log(`---------------------------------------`);
// console.log(fBUser.fullname.userfullname);
// console.log(`---------------------------------------`);
// console.log(fBUser.fullname.userfullname.firstname);
// console.log(`---------------------------------------`);


// console.log(fBUser["fullname"]);
// console.log(`---------------------------------------`);
// console.log(fBUser["fullname"]["userfullname"]);
// console.log(`---------------------------------------`);
// console.log(fBUser["fullname"]["userfullname"]["firstname"]);
// console.log(`---------------------------------------`);


const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3:"c",
    4: "d"
}

const obj3 = {
    5:"e",
    6:"f"
}

// const objAll = Object.assign({},obj1,obj2,obj3)

const obj9 = {...obj1, ...obj2, ...obj3 }

// console.log(obj9);

const used1 = [
    {
        id: "1",
        name: "Pavan",
        email: "p@gmail.com"
    },
    {
        id: "1",
        name: "Pavan",
        email: "p@gmail.com"
    },
    {
        id: "1",
        name: "Pavan",
        email: "p@gmail.com"
    },
]

// console.log(used1[1].name);

// console.log(tinderUser);
// console.log(`------------------------------------------`);
// console.log(Object.keys(tinderUser));
// console.log(`------------------------------------------`);
// console.log(Object.values(tinderUser));
// console.log(`------------------------------------------`);
// console.log(Object.entries(tinderUser));


// this is to check if the property is there or not ...
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));



// -------------------------------------------------------------2nd practice -----------------------------------------------------

const Bunker = new Object // simpletion with constructer

const bunker1 = {} // object literals

// console.log(Bunker);
// console.log(bunker1);

const jinker = {}

jinker.id = "abc012"
jinker.name = "Jishna"
jinker.age = "19"
jinker.isLoggedIn = false

// console.log(jinker);

const pspk1 = {
    email: {
        fullname1:{
            firstname:"Vadala",
            middlename: "Thanisha_Aroha",
            lastname: "sree"
        },
        fullname2:{
            firstname:"Vadala",
            middlename: "Kanaka",
            lastname: "Lakshmi"
        },
        fullname3:{
            firstname:"Vadala",
            middlename: "Jishna_Aarna",
            lastname: "sree"
        },
    }
}

// console.log(pspk1);
// console.log(`-----------1------------------------------------------------------------`);
// console.log(pspk1.email);
// console.log(`---------------2--------------------------------------------------------`);
// console.log(pspk1.email.fullname1);
// console.log(`--------------------3---------------------------------------------------`);
// console.log(pspk1.email.fullname1.middlename);
// console.log(`-------------------------4----------------------------------------------`);

// console.log(pspk1);
// console.log(`-----------1------------------------------------------------------------`);
// console.log(pspk1["email"]);
// console.log(`---------------2--------------------------------------------------------`);
// console.log(pspk1["email"]["fullname1"]);
// console.log(`--------------------3---------------------------------------------------`);
// console.log(pspk1["email"]["fullname1"]["middlename"]);
// console.log(`-------------------------4----------------------------------------------`);

const oj1 = {
    1:"a",
    2:"b"
}

const oj2 = {
    1:"a",
    2:"b"
}

const oj3 = {
    1:"a",
    2:"b"
}

const oj7 = Object.assign({},oj1,oj2,oj3)

// console.log(oj7);
// console.log(`----------------------------------------------`);
// const oj9 = {...oj1, ...oj2, ...oj3}
// console.log(oj9);

const kum = [
    {
        id:"01",
        name:"pavan",
        email:"p@gmail.com"
    },
    {
        id:"02",
        name:"kanaka",
        email:"k@gmail.com"
    },
    {
        id:"03",
        name:"thanu",
        email:"t@gmail.com"
    },
    {
        id:"04",
        name:"jishna",
        email:"j@gmail.com"
    },
]

// console.log(kum[0].name);
// console.log(kum[3].id);

// console.log(jinker);
// console.log(`---------------------------`);
// console.log(Object.keys(jinker));
// console.log(`---------------------------`);
// console.log(Object.values(jinker));
// console.log(`---------------------------`);
// console.log(Object.entries(jinker));
// console.log(`---------------------------`);

// console.log(jinker.hasOwnProperty("id"));


const course = {
    coursename: "Js in Hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

// console.log(course.courseInstructor);

const {courseInstructor: instructor} =  course

// console.log(courseInstructor);

// console.log(instructor);

// {
//     name: "Pavan",
//     coursename: "js in hindi",
//     price: "free"
// }


[
    {},
    {},
    {}
]