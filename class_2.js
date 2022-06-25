// classes are special functions
// classes are not hoisted

// let p1 = new Person(); // doesn't work as class is not hoisted
class Person {}
let p = new Person();

employee(); // still works as function is hoisted
function employee() {}
employee();

console.log(typeof Person);
