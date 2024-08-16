const user = {
    username: "vedant",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }
}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()




//------------------ important ------------------------

console.log(this);  // in node environment , this represent empty object because there is no context in global scope

// but in broswer , this represent window object because when engine run in browser , global object is window while when engine run in node and you have mentioned nothing in global scope hence this represnet empty object

function chai(){
    let username = "vedant"
    console.log(this.username); // this(context) can not be used in function like this , it can be used in object
    
    console.log(this);  // but global scope is present
    
}
chai()

const chai2 = function () {
    let username = "vedant"
    console.log(this.username); // this(context) can not be used in this function syntax also
    
    console.log(this);  // but global scope is present
    
}
chai2()

console.log("-------------------");


const chai3 = () => {       // arrow function
    let username = "vedant"
    console.log(this.username);     // this(context) can not be used in this function syntax also
    
    console.log(this);  // also global scope is not present
    
}
chai3()



const addTwo = (num1 , num2) => {       // normal arrow function
    return num1 + num2 ;
}

console.log(addTwo(3,4));

const addThree = (num1 , num2 , num3) => (num1 + num2 + num3);    // implicite return , paranthesis is removed and no need to write return as code is of one line

console.log(addTwo(3,4,5));

const returnObject = () => ({username: "vedant"})       // if noraml brackets is not used , therefore output is undifined

console.log(returnObject());