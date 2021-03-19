var map = new Map();

map.set('1' , 'Bangladesh1');
map.set('2', 'Bangladesh2')
map.set('3', 'Bangladesh3')
map.set('4', 'Bangladesh4')
map.set('5', 'Bangladesh5')
map.set('6', 'Bangladesh6')
map.set('7', 'Bangladesh7')



console.log(map.keys())
console.log(map.values())

//deleting with key
map.delete('1');

console.log(map.keys())
console.log(map.values())

//Clearing the map
map.clear();
console.log(map.keys())
console.log(map.values())

//getC Value

console.log(map.get('2')) //get value with key.

// Has Value
console.log(map.has('3')) //the key and value exists or not.