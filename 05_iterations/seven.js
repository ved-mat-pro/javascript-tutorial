const myNumbers = [1,2,3,4,5,6,7,8,9,10]

const newNums1 = myNumbers.map( (num) => num + 10)
console.log(newNums1);

myNumbers.forEach( (num) => console.log(num + 10))

//--------------------- channing ----------------------

const newNums2 = myNumbers.map((num)=> num*10).map((num)=> num +1)

console.log(newNums2);
        
const newNums3 = myNumbers.map((num)=> num*10).map((num)=> num +1).filter((num)=> num>40)

console.log(newNums3);
        