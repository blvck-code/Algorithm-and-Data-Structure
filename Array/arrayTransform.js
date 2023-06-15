let input = [0, 1, 0, 3, 12];
const output = [1, 3, 12, 0, 0];

const solution = arr => {
    for (let i = 0; i < arr.length; i++) {
        arr[i] === 0 && arr.splice(i, 1) && arr.push(0)
    }
    return arr;
}

const solution2 = arr => {
    let countZero = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            // arr[arr.length] = arr[i]
            arr.splice(i, 1)
            countZero++;
        }
    }
    for (let i = 0; i !== countZero; i++) {
        arr.push(0)
    }
    return arr
}

console.log(solution(input))
