// -------------------------- array part1 ---------------------------

const arr1 = [0,1,2,3,4,5]      //first method to represent array
const arr2 = new Array(7,4,5,8,9,6,1)       //second method to represent array

console.log(arr1[3]);

arr1.push(6)    //add element to end of array
console.log(arr1);

arr1.pop()  //remove last element from array
console.log(arr1);

arr1.unshift(9) // this is avoided as index all previously present element will be transformed , this process is heavy if array is large
console.log(arr1);

arr1.shift()        //remove element from beginning of array
console.log(arr1);

console.log(arr1.includes(9));
console.log(arr1.indexOf(3));

const arr3 = arr1.join()
console.log(arr3);
console.log(typeof arr3);

//--------------------slice V/s splice --------------------------------

console.log("a" , arr1);

console.log(arr1.slice(1,3));       //upper range is not included and original array remains as it is.

console.log("b", arr1);

console.log(arr1.splice(1,3));      //upper range is included and original array is transformed and spliced elements are removed from original array.

console.log("c" , arr1);

// ------------------------ array part2 ---------------------------

const marvel_heroes = ["thor" , "ironman" , "spiderman"]
const dc_heroes = ["superman" , "flash" , "batman"]

//marvel_heroes.push(dc_heroes)   add complete array as an element in original array itself

// console.log(marvel_heroes);
// console.log(marvel_heroes[3]);
// console.log(marvel_heroes[3][1]);

const all_heroes = marvel_heroes.concat(dc_heroes)  // add all elements of array as an unique element in the main array and return new array

console.log(all_heroes);

const all_new_heroes = [...marvel_heroes , ...dc_heroes]    //... is spreading of an array , remember this with example of glass which will spread into pieces when thrown on floor

console.log(all_new_heroes);

const arr4 = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const arr5 = arr4.flat(Infinity)    //all sub arrays are disolved into one array

console.log(arr5);

console.log(Array.isArray("vedant"));   // vedant is string therefore output is false

console.log(Array.from("vedant"));

console.log(Array.from({name: "vedant"}));  // output is empty array as from function is unable to convert it into array , we have specifically state that make array of key or value

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1 ,score2 , score3));