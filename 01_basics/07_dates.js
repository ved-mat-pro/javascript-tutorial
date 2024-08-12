// Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString());

console.log(typeof myDate);

let myCreatedDate1 = new Date(2024 , 0 ,23)
console.log(myCreatedDate1.toUTCString());

let myCreatedDate2 = new Date(2024 , 0 ,23 , 5 , 3)
console.log(myCreatedDate2.toUTCString());

let myCreatedDate3 = new Date("2024-08-12")
console.log(myCreatedDate3.toLocaleString());

console.log(myCreatedDate3.getTime());       //this will tell how much time is elpsed form 1 jan 1970 till now


let myTimeStamp = Date.now()    //this will also tell how much time is elpsed form 1 jan 1970 till now , output is in milisecond

console.log(myTimeStamp);

console.log(Math.round(myTimeStamp/1000));  // output is in seconds , to avoid decimals math function is used , either use floor or round not ciel -> why?

let today = new Date()
console.log(today);
console.log(today.getDate());
console.log(today.getMonth()+1 );
console.log(today.getFullYear());

console.log(`Hello we are in ${today.getFullYear()} , today is ${today.getDay()}`)      //method of representing each detail specifically

let today1 = today.toLocaleString('default',{
                weekday: "long"
            })

console.log(today1);
            