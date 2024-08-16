// if

//if(condition){scope}

const temperature = 41

if(temperature <= 50){
    console.log("less than 50");
}

else{
    console.log("more than 50");
}

console.log("always execute");



const balance = 1000
if(balance > 500) console.log("test") , console.log("test2");       //implicite code
 


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromGmail = true

if(userLoggedIn && debitCard){
    console.log("allow to buy course");
    
}

if (loggedInFromGmail || loggedInFromGoogle ){
    console.log("user logged in");
        
}
