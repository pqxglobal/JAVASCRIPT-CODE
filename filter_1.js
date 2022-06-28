// filter() erstellt ein neues Array mit allen Elementen, die den von der bereitgestellten Funktion implementierten Test bestehen.

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const filter_1 = words.filter(word => word.length > 6);
const filter_2 = words.filter(word => word.length < 6);

console.log(filter_1);
// expected output: Array ["exuberant", "destruction", "present"]

console.log(filter_2);