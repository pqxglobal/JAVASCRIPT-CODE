// var = hoisted and function scope
// let = not hoisted and block scope

function greetPerson(name) {
  let greet;
  if (name === 'Chandler') {
    greet = 'Hello Chandler';
  } else {
    greet = 'Hi there';
  }
  console.log(greet);
}
greetPerson('Chandler');
