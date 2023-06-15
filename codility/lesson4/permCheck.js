const arr = [4, 1, 3, 2];

const solution = arr => {
    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== i + 1)  return 0;
    }
    return 1;
}

console.log(solution(arr))