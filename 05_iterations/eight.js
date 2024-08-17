const myNums = [1,2,3]

const myTotal1 = myNums.reduce(function (accumulator , currentvalue) {
    console.log(`accumulator: ${accumulator} and currentvalue: ${currentvalue}`);
    return accumulator + currentvalue ;
} , 0)

console.log(myTotal1);

const myTotal2 = myNums.reduce((acc , curr) =>  acc + curr  , 0)

console.log(myTotal2);

console.log("------------------------");


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]

const totalPrice = []

for (let index = 0; index < shoppingCart.length; index++) {
    totalPrice.push(shoppingCart[index].price);
}
console.log(totalPrice);

const myTotal3 = totalPrice.reduce((acc, curr) => acc + curr , 0)
console.log(myTotal3);
