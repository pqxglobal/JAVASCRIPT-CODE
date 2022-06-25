let percentBonus = () => 0.1;
let getValue = function (value = 10, bonus = value * percentBonus()) {
  // bonus = value is valid, value = bonus would be invalid
  console.log(value + bonus);
  console.log(arguments.length); // ignores default values
};
getValue();
getValue(20);
getValue(20, 30);
//getValue(undefined, 30);
