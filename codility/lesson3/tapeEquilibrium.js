
const arr = [3, 1, 2, 4, 3]

const sumUpArray = A => {
    let sum = 0;
    for(let i = 0; i < A.length; i++) {
        sum += A[i];
    }
    return sum;
}

const solution = arr => {
   let p = 1;
   let sumPartOne = arr[p - 1];
   let sumPartTwo = sumUpArray(arr.slice(p, arr.length));
   let diff = Math.abs(sumPartOne - sumPartTwo)

    for (p; p < arr.length - 1; p++) {
        sumPartOne += arr[p];
        sumPartTwo -= arr[p];

        let tempDiff = Math.abs(sumPartOne - sumPartTwo);

        if (tempDiff < diff) {
            diff = tempDiff
        }
    }
    return diff;
}

console.log(solution(arr))