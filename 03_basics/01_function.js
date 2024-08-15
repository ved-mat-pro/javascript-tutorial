function sayMyName(){       //function -> keyword , sayMyName -> function name , (){} -> syntax
    console.log("v");
    console.log("e");
    console.log("d");
    console.log("a");
    console.log("n");
    console.log("t");
}

sayMyName()     //sayMyName -> function reference , () -> execution





function addTwoNumbers(num1 , num2){    // num1 and num2 is called parameters
    console.log(num1 + num2); 
}

addTwoNumbers(3,4)      // 3 and 4 are called arguments

const result = addTwoNumbers(3,4)

console.log(result);        // output is coming undefined as printing ans retruning are two differnet things , above function is printing sum of num1 and num2 , but it is not returning that sum , hence sum is not stored in result

function addThreeNumbers(num1 , num2 , num3){    
    let sum = num1 + num2 + num3 ; 
    return sum ;
    console.log("unreachable code"); // code after return will not execute
    
}

const result2 = addThreeNumbers(1,2,3)
console.log(result2);





function loginUserMessage(username){
    return `${username} just logged in`
}

console.log(loginUserMessage("vedant"));
console.log(loginUserMessage(""));      //output is  just logged in
console.log(loginUserMessage());        //output is undefined just logged in , to avoid these kind of situation we use if else

function loginUserMessage1(username){       // bydefault value can also be given as (username = sam)
    if(username === undefined){     // username === undefined can also be written as !username

        console.log("please enter your username");
        return ;
    }
    return `${username} just logged in`
}
console.log(loginUserMessage1()); 





function calculateCartPrice(num1){
    return num1
}

console.log(calculateCartPrice(200,400,500));   //output is 200 , to include all 3 numbers rest operator(...) is used , it is also calles spread operator  , name depends on usage

function calculateCartPrice1(...num1){
    return num1
}

console.log(calculateCartPrice1(200,400,500));

function calculateCartPrice2(val1 , val2 , ...num1){
    return num1
}

console.log(calculateCartPrice2(200,400,500,1000 ,2000));