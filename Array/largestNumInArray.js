/*
Given an array with all distinct elements, find the largest three elements. Expected time complexity is O(n) and extra space is O(1).


Example
Input: arr[] = {10, 4, 3, 50, 23, 90}
Output: 90, 50, 23

 */

const array = [10, 4, 3, 50, 23, 90]

const largeNum = (arr) => {
    let first, second, third;

    if (arr.length < 3) {
        return;
    }

    third = first = second = Number.MIN_VALUE;

    for (let i = 0; i < arr.length; i++) {
        // If current element is greater that first
        if (arr[i] > first) {
            third = second;
            second = first;
            first = arr[i]

            console.log('Third 1st ==>', third);
            console.log('second 1st ==>', second);
            console.log('first 1st ==>', first);
        }

        // If arr[i] is in between first and second then update second
        else if (arr[i] > second) {
            third = second;
            second = arr[i];

            console.log('Third 2nd ==>', third);
            console.log('second 2nd ==>', second);
            console.log('first 2nd ==>', first);
        }

        else if (arr[i] > third) {
            third = arr[i];

            console.log('Third 3nd ==>', third);
            console.log('second 3nd ==>', second);
            console.log('first 3nd ==>', first);
        }

    }
    return [third, second, first];
}

const arr = new Array(3);
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
arr[3] = 4;

for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i])
}

let matrix = [[4, 5], [34, 67], [8, 9]];

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0;  j < matrix[i].length; j++) {
        console.log(`matrix[${i}][${j}] = ${matrix[i][j]}`)
    }
}