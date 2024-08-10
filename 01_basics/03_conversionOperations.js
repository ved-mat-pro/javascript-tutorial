let score1 = 33;
let score2 = "33abc"

console.log(typeof score1);
console.log(typeof(score1));

let valueInNumber = Number(score2)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1
// false =>0

let somenumber = 33
let stringnumber = String(somenumber)
console.log(stringnumber);
console.log(typeof stringnumber);

// *******************Operations**************************

let value = 3
let negValue = -value
console.log(negValue);

let str1 = "hello"
let str2 = " vedant"
let str3 = str1 + str2
console.log(str3);
let str4 = str1 - str2
console.log(str4);      //output is NaN

console.log("1" + 2);       //output is 12
console.log(1 + "2");       //output is 12
console.log("1" + 2 + 2);       //output is 122
console.log(1 + 2 + "2");       //output is 32

console.log(+true);     //output is 1
console.log(+"");       //output is 0

num1 = num2 = num3 = 2+2
console.log(num1);
console.log(num2);
console.log(num3);

let gameCounter = 100
++gameCounter
console.log(gameCounter);       //output is 101



