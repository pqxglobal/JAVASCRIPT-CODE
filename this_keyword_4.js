// default binding
//const name = 'Leo' won't work
globalThis.name = 'Leo' // use the globalThis property
function sayMyName() {
  console.log(`My name is ${this.name}`);
}

sayMyName()

/*
* order of precedence:
* new binding
* explicit binding
* implicit binding
* default binding
*/
