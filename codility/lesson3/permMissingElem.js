const arr: number[] = [2, 3, 1, 5];

const solution = (arr: number[]): number => {
    let maxNum: number = arr.length + 1;
    let totalSum: number = (maxNum * (maxNum + 1)) / 2;
    let partialSum: number = 0;

    for (let i: number = 0; i < arr.length; i++) {
        partialSum += arr[i];
    }
    return totalSum - partialSum;
}

console.log(solution(arr))