function outer() {
  let counter = 0; // local or function scope
  function inner() {
    counter++;
    console.log(counter);
  }
  return inner; // returns the complete function inner!!!
}
const fn = outer(); // function inner is stored in variable result and can be called directly
fn();
fn();
fn();