/**
 * The at() method takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.
 * @type {number[]}
 */

const arr = [1, 2, 3, 4];

console.log(arr.at(0)) // Expectred result => 1
console.log(arr.at(-2)) // Expectred result => 3