let val1 = 10
let val2 = 5
function addNum(num1 , num2){
    let total = num1 + num2;
    return total;
}
let result1 = addNum(val1 , val2)
let result2 = addNum(10 ,2)



// javascript execution Context

// global execution Context (this)
// function execution Context
// eval execution context


// code run in two phases:

// 1) memory creation phase (creation phase) (first cycle)
// -memory is alocated to the assigned variables

// 2)execution phase(second cycle)



// how code is executed?

// 1) global execution(global environment)
// - code is run through global execution , and global execution is allocated in "this"

// 2) memory creation phase
// - all variables are stored and undefined is allocated in them

// - val1 -> undefined
//   val2 -> undefined
//   addNum -> defination
//   result1 -> undefined
//   result2 -> undefined

// 3)execution phase
//   val1 <- 10
//   val2 <- 5
//   addNum ->[new variable environment + execution thread] (memory and execution phase processes will run again for every written function)

//     2') memory phase
//         - val1 -> undefined
//         val2 -> undefined
//         total -> undefined

//     3') execution phase
//         - num1 -> 10
//         num2 -> 5
//         total -> 15

//         now total is return in global execution 

//         after 3' process , new variable environment + execution thread is deleted

//   result1 = 15
//   result2 ->[new variable environment + execution thread]
    
//         2") memory phase
//         val1 -> undefined
//         val2 -> undefined
//         total -> undefined

//         3") execution phase
//         num1 -> 10
//         num2 -> 2
//         total -> 12

//         now total is return in global execution 

//         after 3" process , new variable environment + execution thread is deleted




// --------------------- call stack ------------------------------ 

// lifo - last in first out
// practiced in inspect mode
