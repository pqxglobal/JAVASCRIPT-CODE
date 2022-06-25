let employee = ['Chandler', 'Bing', 'Female'];

let [fname, lname, gender = 'Male'] = employee; // destructuring the employee array

console.log(fname);
console.log(lname);
console.log(gender);
