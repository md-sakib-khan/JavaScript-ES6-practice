var myself = {
    firstName : 'Md.Sakib',
    lastName : 'Khan',
    age : 23,
    city : 'Dhaka',
    eye : {
        color : 'black',
        size : 'medium'
    }
}

for(item in myself){
    console.log(item + ': '+ myself[item].);
}

console.log(myself['eye'].color)
console.log(myself['eye'].size)