const input = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const output = [0, 1, 2, 3, 4];

const solution = arr => {
    let i = 0
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    arr.length = i + 1;
    return arr;
}

console.log(solution(input))