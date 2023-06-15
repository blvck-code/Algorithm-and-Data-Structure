const test1 = [1, 3, 6, 4, 1, 2];
const test2 = [1, 2, 3];
const test3 = [-1, -3];

const solution = arr => {
    const set = new Set(arr);
    let i = 1;

    while (set.has(i)) {
        i++;
    }
    return i;
}

console.log(solution(test1))
console.log(solution(test2))
console.log(solution(test3))