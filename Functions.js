function calculation(...numbers){
    for(let i of numbers){
        console.log(i);
    }
}

calculation(1,2,3)

var myname = function(valName){
    return valName;
}

console.log(myname("Sakib"))


var GlobValue = 5; // this is global value
console.log(GlobValue);

function myfuntion(){
    var value = 3; // this is local variable.
    console.log(value);
}
myfuntion();



function withParameter(a,b, ...c){
    console.log(a)
    console.log(b)
    console.log(c)
}

withParameter(1,3,4,5,6,7,8)


function withReturn(){
    return 'Bangladesh'
}

console.log(withReturn())

// Arrow Function

 var func = () =>{
     console.log("This is Arrow Function")
 }

 func();