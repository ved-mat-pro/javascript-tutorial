const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    console.log(key);
}
for (const key in myObject) {
    console.log(myObject[key]);
}
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js" , "rb" , "py" , "java" , "cpp"]

for (const key in programming) {
        console.log(key);           // index of each element iss coming in output       
}
for (const key in programming) {
        console.log(programming[key]);
}