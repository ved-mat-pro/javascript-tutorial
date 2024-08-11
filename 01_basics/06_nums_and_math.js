const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString());        //console.log(balance.toString);    output is [Function: toString]  how?

console.log(balance.toString().length);         //console.log(balance.toString.length);    output is 1  how?

console.log(balance.toFixed(2));        //to avoid higher precision

const num1 = 23.8966
const num2 = 123.8966
const num3 = 1123.8966

console.log(num1.toPrecision(3));
console.log(num2.toPrecision(3));
console.log(num3.toPrecision(3));

const largeDigit = 1000000

console.log(largeDigit.toLocaleString());       //according ot US standards
console.log(largeDigit.toLocaleString('en-IN'));        //according to indian standards

//--------------------------- Math -------------------------------------

// console.log(Math.abs(-4.35));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.max(4,3,6,8));
// console.log(Math.min(4,3,6,8));

console.log(Math.random());       //gives value between 0 and 1     application in dice game
console.log(Math.random()*10);    // now value will lie between 0 and 10
console.log((Math.random()*10)+1);  // now value will lie bwtween 1 and 11
console.log(Math.abs((Math.random()*10)+1));    //not giving absolute value     why?
console.log(Math.floor((Math.random()*10))+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min + 1))+min);