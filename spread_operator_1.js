const temperatures = [76, 72, 68, 79, 54, 65];

console.log(Math.min(...temperatures));

// example 2
const tvShows = ['Six Feet Under', 'Chernobyl', 'Black Mirror', 'Fleabag'];

console.log(...tvShows);

// example 3
console.log(`this stuff is bananas: `, ...`BANANAS`);

// example 4
console.log(Math.min(...'9832'));

// example 5
const parents = ['Lorie', 'Steve'];
const kids = ['Jake', 'Annie', 'Jess'];

const fullFamily = [parents, kids];
console.log(fullFamily);

const fullFamily2 = [...parents, ...kids];
console.log(fullFamily2);

// example 6
const originals = ['Mona Lisa', 'American Gothic', 'The school of Athens'];
const copies = [...originals];

copies.push('Nighthawks');

console.log(...originals);
console.log(...copies);
