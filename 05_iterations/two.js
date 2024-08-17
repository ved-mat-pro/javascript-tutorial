// while loop

index = 0
while (index <= 10) {
    console.log(`value of index is ${index}`);
    index = index + 2 ;
}

let myArray = ["flash" , "batman" , "superman"]

index = 0 
while (index < myArray.length) {
    console.log(myArray[index]);
    index++ ;
}

// do while loop

let score = 1       // insted of 1 if it is 11 , then output will be "score is 11" , output is coming because conditon is checked after the execution

do {
    console.log(`score is ${score}`);
    score++
} while (score<=10);