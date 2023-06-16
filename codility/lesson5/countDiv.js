const solution = (A, B, K) => {
    return parseInt(B / K) - parseInt(A / K) + (A % K === 0)
}

console.log(solution(6, 11, 2))