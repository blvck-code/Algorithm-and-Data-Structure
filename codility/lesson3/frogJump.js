

const solution = (X: number, Y: number, D: number): number => {
    return (Math.ceil((Y - X) / D))
}

console.log(solution(10, 85, 30))