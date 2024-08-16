// immediately invoked funciton expressions (IIFE)

(function chai1(){

    // named iife

    console.log(`DB1 connected`);       // if this block is written after chai() , then it is throwing error because the function is invoked but it do not know when to end the context , therefore we have to end it by using ';'
})();

function chai(){
    console.log(`DB connected`);   
}

chai(); // -> now no error is coming with chai2()

(function chai2(){
    console.log(`DB2 connected`);
})();

(() => {        //un_named iife

    console.log(`DB3 connected`);
})();

// function chai1(){
//     console.log(`DB connected`);   
// }() -> throwing error therefore whole function is placed into normal brackets

// ()() -> first bracket is for function defination and second bracket is for function execution

// iife is used for immediate function execution
// also global scope pollution creates problem sometimes , iife is used to remove the pollution caused by global scope variables or declearation



((name) => {
    console.log(`DB4 connected , ${name}`);
})("vedant");