const coding = ['js' , 'ruby' , 'python' , 'cpp']

coding.forEach( function (item){        //coding.forEach( function name won't come(){} )
    console.log(item);    
} )

coding.forEach( (val) => {      //coding.forEach( name = () => {})  name = will not come
    console.log(val);
    
})

function printMe(item){     //reference of other function is given
    console.log(item);   
}

coding.forEach(printMe)     //just write printMe not printMe() as only reference is required , printing will be done by forEach loop


coding.forEach( (item , index , arr) => {
    console.log(item , index , arr);
})

const myCoding =[
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "java",
        languageFileName: "java"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageFileName);
})