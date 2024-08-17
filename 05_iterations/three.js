//for of

//["" , "" , ""]
//[{} , {} , {}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello World!"

for (const greet of greetings) {
    console.log(`each char is ${greet}`);
    
}

// ------------------------- Maps -------------------------

const map = new Map()       // map hold key and value in the order they are provided
map.set('IN' , "India")
map.set('USA' , "United States Of America")
map.set('FR' , "France")
map.set('IN' , "India")     // this will not print as map store unique key and value

console.log(map);

for (const key of map) {    // complete map will print
    console.log(key);   
}
for (const [key] of map) {  // only keys got print
    console.log(key);   
}
for (const [key , value] of map) {  // both key and value got print
    console.log(key , ':-' , value);   
}

const myObject = {
    'game1': 'NFS',
    'game2': 'BGMI'
}

// for (const [key , value] of myObject){       myObject is not iterable for this syntax , map is iterable , for object for in loop is used
//     console.log(key , ':-' , value);       
// }

console.log("-------------------");


// for (const key in map) {     maps can not be interated through for in loop
//     console.log(key);
    
// }