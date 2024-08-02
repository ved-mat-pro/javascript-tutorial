const accountId = 144553 
let accountEmail = "name@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"      //this syntax of declaring the variable is also valid but this is not preferef syntax

// accountId = 234445      assginment to const is not vaild
accountEmail = "me@gmail.com"
accountPassword = "212212121"
accountCity = "Kota"

/*
prefer not to use var
because of issue in block scope and functional scope
*/ 

let accountState;

console.log(accountId);

console.table([accountEmail , accountPassword , accountCity , accountState]);


