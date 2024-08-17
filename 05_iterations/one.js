//for

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

//first variable name index is defined
//index < array.length; -> this is condition check
// then block is exectued
// then index value is increased

for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element);    
}

for (let i = 0; i <= 10; i++) {
    console.log(`outer loop value: ${i}`);
    
    for (let j = 0; j <=10; j++) {
        console.log(`Inner loop value ${j} and inner loop ${i}`);
    }

}

for (let i = 2; i <= 10; i++) {
    console.log(`outer loop value: ${i}`);
    
    for (let j = 1; j <=10; j++) {
        console.log(i + '*' + j + '=' + i*j);
        
    }

}

let myArray = ["flash" , "batman" , "superman"]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}

// ---------------------- break and continue --------------------

for (let index = 1; index <= 20 ; index++) {

    if(index == 5){
        console.log("5 is detected");
        break;
    }
    console.log(`value of i is ${index}`);
        
}

for (let index = 1; index <= 20 ; index++) {

    if(index == 5){
        console.log("5 is detected");
        continue;
    }
    console.log(`value of i is ${index}`);
        
}