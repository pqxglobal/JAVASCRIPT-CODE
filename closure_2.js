let x = 1; // Global scope

const parentFunction = () => {
  let myValue = 2; // local or function scope

  const childFunction = () => {
    console.log((x += 5));
    console.log((myValue += 1));
  };
  return childFunction; // returns the complete function childFunction!!!
};

const result = parentFunction(); // function childFunction is stored in variable result and can be called directly
console.log('x = ' + x);
result();
console.log('x = ' + x);
result();
console.log('x = ' + x);