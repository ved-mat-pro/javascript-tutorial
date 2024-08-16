//const userEmail = "vedant.ai"     condition is true
//const userEmail = " "     condition is true 
//const userEmail = ""        condition is false
const userEmail = []      //condition is true

if(userEmail){      // no comparision is done , still able to conclude whether userEmail is true or not as it is assumed that condition is true 
    console.log("got user email");
}

else{
    console.log("don't have user email");
}

// falsy values

// false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN

// other than these all are truthy

// some surprising truthy values

// "0" , 'flase' , " " , {} , [] , function(){}

if (userEmail.length === 0){
    console.log("array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
    
}


// ------------------- nullish coalescing operator (??):  null and undefined keywords are used

val1 = 5 ?? 10
console.log(val1);

val2 = null ?? 10
console.log(val2);

val3 = undefined ?? 15
console.log(val3);

val4 = null ?? undefined
console.log(val4);          // output is undefined

val5 = null ?? 10 ?? 12
console.log(val5);      // first value other than null and undefined will be in output




// --------------------- terniary Operator ----------------------

// condition ? true statement : false statement

const iceTeaPrice = 100
 iceTeaPrice <= 80 ? console.log("i will buy") : console.log("i will not buy");
 
 