// Currying

// Named after Haskell B. Curry

// Concept from lambda calculus

// Currying takes a function that receives more than one parameter
// and breaks it into a series of unary (one parameter) functions

// Therefore, a curried function takes only one parameter a time

const buildSandwich = (ingredient1) => {
  return (ingredient2) => {
    return (ingredient3) => {
      return `${ingredient1}, ${ingredient2}, ${ingredient3}`;
    };
  };
};

const mySandwich = buildSandwich('Bacon')('Lettuce')('Tomato');
console.log(mySandwich);

// It works but thats getting ugly and nested the further we go

// Let's refactor

const buildSammy = (ingred1) => (ingred2) => (ingred3) => `${ingred1},${ingred2},${ingred3},`;

const mySammy = buildSammy('turkey')('cheese')('bread');
console.log(mySammy);
