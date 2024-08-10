console.log("2">3);
console.log("02">1);

console.log(null > 0);
console.log(null == 0);     //The reason is that an equality check == and comparisons > < >= <= work differently. Comparisons convert null to a number, treating it as 0. That's why null >= 0 is true and null > 0 is false.
console.log(null >= 0);
console.log(null <= 0);

// === -> strict check (check value and datatype)

console.log("2" === 2);