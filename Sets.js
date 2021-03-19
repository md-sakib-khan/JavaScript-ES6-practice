var myset = new Set()

myset.add('Bangladesh')
myset.add('India')
myset.add('China')
myset.add('Nepal')
myset.add('Nepal') // set wont store duplicate values.

console.log(myset)

/* Set(4) { 'Bangladesh', 'India', 'China', 'Nepal' }*/

let colors = new Set([1,2,3,4,5,6,7])


// Set Methods

/* 
myset.clear() // all cleared
myset.delete('value') // specific value will be deleted
myset.values() // will get all values
myset.has('value') // if the value exists or not.
myset.size() // get size of set

*/