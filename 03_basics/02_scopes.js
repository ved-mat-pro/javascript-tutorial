if(true){
    let a = 10
    const b = 20
    var c = 30
}

//console.log(a);   a is local variable and can not be excessed outside the block scope (here if block)
//console.log(b);    b is also local variable and can not be excessed outside the block element (here if block)

console.log(c); //c is acting as global variable , i.e we are able to excess it outside the block element , hence it will create issue therefore var is not used 




function one(){
    const username = "vedant"

    function two(){
        const website = "youtube.com"
        console.log(username);
    }
    
    //console.log(website);     website is not defined outside the block scope(here it is function two())

    two()
    
}

one()



function addone(num){       // this is a function , here only declaration is done 
    return num + 1;
}
addone(5)       // if declaration is done in this way , then addone(5) can be accessed before initialization

const addtwo = function(num){       // this is also a function , but it is called expression , here after declaration it is hold in a variable
    return num + 2
}
addtwo(5)       // if declaration is done in this way , then addtwo(5) can not be accessed before initialization
 