const name = "vedant"
const repoCount = 50

console.log(name + repoCount + "value");    // this method is outdated and not used in industry

//alternate method
//string interpolation
console.log(`${name}${repoCount}value`);

const gameName1 = String('vedant')
console.log(gameName1);
console.log(typeof gameName1);

const gameName2 = new String('vedant')
console.log(gameName2);
console.log(typeof gameName2);

console.log(gameName1[0]);
console.log(gameName2[0]);

console.log (gameName2.length);
console.log (gameName2.toUpperCase( ));
console. log (gameName2.charAt(2));
console. log (gameName2.indexOf('t'));

console. log (gameName2.indexOf('x'));

const newStr = gameName2.substring(0,4)     // this will not support negative index
console. log (newStr);

const anotherStr = gameName2.slice(-6, 4)   // this will support negative index
console. log (anotherStr);

const newStr1 = "   vedant  "
console.log(newStr1);
console.log(newStr1.trim());    // extra spaces will be removed

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url. replace('%20','-'));

console.log(url.includes('hitesh'));

const newStr2 = "ved-ant-mat-ur"
console.log(newStr2.split('-'));