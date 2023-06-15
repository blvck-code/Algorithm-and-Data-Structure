
const arr = [3, 8, 9, 7, 6];
const k = 3;

const solution = ( arr, K ) => {
    if(!arr.length) return;
    for (let i = 0; i < K; i++) {
        arr.unshift(arr.pop())
    }
    return arr;
}

console.log(solution(arr, k))
