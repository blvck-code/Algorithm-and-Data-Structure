
const arr = [3, 8, 9, 7, 6];
const k = 3;

const solution = (arr, k) => {
    if(!arr.length) return;

    for (let i = 0; i < k; i++) {
        arr.unshift(arr.pop())
    }
    return arr;
}

console.log(solution(arr, k))
