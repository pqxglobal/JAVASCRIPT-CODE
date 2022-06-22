const person = {
  alive: true,
};

const musician = {
  plays: true,
};

Object.setPrototypeOf(musician, person);

console.log(musician.plays);
console.log(musician.alive);

// Extending the prototype chain => general to specific to more specific
const gitarist = {
  strings: 6,
  __proto__: musician,
};

console.log(gitarist.alive);
console.log(gitarist.plays);
console.log(gitarist.strings);
console.log(gitarist);
