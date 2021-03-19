class myclass{
    
    myname = ""
    constructor(param){
        this.myname = param;
    }

    mymethod1(){
        console.log("This is printed")
    }
    mymethod2(){
        console.log("This is printed")
    }
    mymethod3(){
        console.log("This is printed")
    }
    getName(){
        console.log(this.myname);
    }
}
var myObject = new myclass('Sakib');

myObject.mymethod1();
myObject.getName();
