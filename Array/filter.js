/**
 * The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
 *
 * @type {string[]}
 */


const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);
const result2 = words.filter(word => word === 'spray');

console.log(result)
console.log(result2)