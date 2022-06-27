// The WeakSet object lets you store weakly held objects in a collection.
// WeakSet objects are collections of objects.
// Just as with Sets, each object in a WeakSet may occur only once.
// All objects in a WeakSet's collection are unique.
// WeakSets are collections of objects only.

let mySet = new WeakSet();
let key = {};
mySet.add(key);
console.log(mySet.has(key));
//key = null;
