const arr = [1, 2, 3, 4, 5]


// Splice methods changes the contents of an array by removing or replacing existing elements and/or adding news elemnts in place
// console.log(arr.splice(1, 2))

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months)
months.splice(3, 0, 'May');
// Replaces 1 element at index 4
console.log(months);