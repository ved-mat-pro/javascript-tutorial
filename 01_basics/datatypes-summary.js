// primitive

// 7 types : string , number , boolean , null . undefined , symbol , bigInt

const score = 100 
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail = undefined      // or let userEmail;

const id = Symbol("123")        // symbol is used to give unique value
const anotherId = Symbol("123")

console.log(id == anotherId);

const bigNumber = 123402520348924343234235n
console.log(typeof bigNumber);

// reference (non primitive)

// array , objects , functions

const heros = ["superman" , "spiderman" , "ironman"];

let obj1 = {
    name: "vedant",
    age: 20
}

const myFunction = function(){
    console.log("hello world");   
}
myFunction();

// -------------------------------------------------

// Stack (primitive) -> get copy ->changes occur in copy
// Head(Non - Primitive) -> get reference ->changes occur in original value

let myYoutubeName = "masterpiece"

let anothername = myYoutubeName
anothername = "wellness wispers"

console.log(myYoutubeName);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "vedant@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

