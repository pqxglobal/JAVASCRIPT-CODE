// The initial value of the @@iterator property is the same function object as the initial value of the entries method.

const map1 = new Map();

map1.set('0', 'foo');
map1.set(1, 'bar');

const iterator1 = map1[Symbol.iterator]();

for (const item of iterator1) {
  console.log(item);
}