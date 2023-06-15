const arr = [1, 3, 1, 4, 2, 3, 5, 4];
const k = 5

const solution = (arr, K) => {
    let covered = 0;
    let tempArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (!tempArray[arr[i]]) {
            tempArray[arr[i]] = true;
            covered++

            if (covered === K) return i
        }
    }
    return -1
}

console.log(solution(arr, k))