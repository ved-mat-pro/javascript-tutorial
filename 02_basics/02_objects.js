// object is singleton when made by constructure 
const per1 = new Object()
// object is not signleton when made by literal
const per2 = {}


// object literals

const JsUser = {
    name: "vedant",     //apart from name of key "name" you can assign index
    age: 20,
    location: "jaipur",
    email: "vedantmathur1@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]
}

console.log(JsUser.name);
// console.log(JsUser[name]);       throwing error as name is string therefore will be written in ""
console.log(JsUser["name"]);    // alternate method of fetching value of a key


// this alternate method should be used and previous one should be avoided because:
//if key value pair is "full name": "vedant mathur"
//console.log(JsUser."full name"); wrong syntax
//console.log(JsUser.full name); full is not defined

// hence only one method is left ; 
//console.log(JsUser["full name"])


// defining symbol and converting it into key in object

const mySym = Symbol("key1")

const JsUser1 = {
    mySym: "mykey1"     //incorrct syntax as mySym is string not symbol
}

const JsUser2 = {
    [mySym]: "mykey1"       //correct syntax as mySym is symbol
}

console.log(JsUser1["mySym"]);
console.log(JsUser1.mySym);
console.log(typeof JsUser1.mySym);

console.log(JsUser2[mySym]);
console.log(JsUser2.mySym);     //undefined
// console.log(JsUser2.[mySym]);        invalid syntax

console.log(typeof JsUser2[mySym]);
console.log(typeof JsUser2.mySym);      //undefined
//console.log(typeof JsUser2.[mySym]);        invalid syntax

JsUser.email = "vedant@xyz.com"
console.log(JsUser);

Object.freeze(JsUser)       //now no update can be done in JsUser
JsUser.email = "vedantupdate@xyz.com"
console.log(JsUser);

JsUser1.greetings = function(){
    console.log("hello JS user");
}

console.log(JsUser1.greetings);
console.log(JsUser1.greetings());

JsUser1.greetings1 = function(){
    console.log(`hello JS user, ${JsUser.name}`);       // if name and greeting is present in same object , then you can write ${this.name}
}

console.log(JsUser1.greetings1());

// ------------------------ object constructor -------------------------

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname: "vedant",
            lastname: "mathur"
        }
    }
}

console.log(regularUser);
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"c" , 4:"d"}
const obj3 = {obj1 , obj2}

console.log(obj3);

const obj4 = Object.assign({} , obj1 , obj2)    // empty paranthesis is included because all the values will be now stored in that empty paranthesis , if {} is not written then all the values will be stored in obj1 and it will be transformed
console.log(obj4);

const obj5 = {...obj1 , ...obj2}
console.log(obj5);

const users = [
    {
        id:1 ,
        email: "a@gmail.com" 
    },

    {
        id:2 ,
        email: "b@gmail.com" 
    },

    {
        id:3 ,
        email: "c@gmail.com" 
    }
]

console.log(users[1].email);


// ----------------------- destructuring ------------------------------

const course = {
    coursename: "JS in hindi",
    price:"999",
    courseInstructor:"vedant"
}

console.log(course.courseInstructor);

const {courseInstructor: instructor} = course   // const {key_name: modified small name} = object name
//console.log(courseInstructor);    after giving new name , original name will not work
console.log(instructor);




