//Normal printing in colsole
console.log("hello world")

// variable declaration using let
let x = 4
let y = 3
let result = x+y
console.log("Result :"+ result)

// variable declaration using var
var a = 5;
var b = 3;
console.log("Result : "+(a+b))

// var and let will work similarly.


//const will not allow to change the value.
const CantChange = 3;
console.log("This value Cant be Changed = " + CantChange)

// CantChange = 5; // Cant do this.


//Dynamic value assign
s = 3; 
console.log(s+23);

//List
let country = ["Bangladesh","Japan", "Malaysia"];
//Using spread operator for attaching 2 list.
let population = [...country , '16 Crore','12 Crore','8 Crore'];
console.log(population)
/*
All elements listed in One list.
[
  'Bangladesh',
  'Japan',
  'Malaysia',
  '16 Crore',
  '12 Crore',
  '8 Crore'
]*/



//can also do this.
let newList = ['16 Crore','12 Crore','8 Crore'];
newList.push(country) 
console.log(newList)
/*
New List will be added as a new list within the list.
[
    '16 Crore',
    '12 Crore',
    '8 Crore',
    [ 'Bangladesh', 'Japan', 'Malaysia' ]
    */

