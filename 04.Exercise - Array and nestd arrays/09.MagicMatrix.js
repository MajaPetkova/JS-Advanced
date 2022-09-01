function solve(matrix) {
    let sum1 = 0;
    let sum2 = 0;

    for (let j = 0; j < matrix.length; j++) {
        sum1 = matrix[j][0] + matrix[j][1] + matrix[j][2]
        for (let i = 0; i < matrix[j][i]; i++) {
            sum2 += (matrix[i][j])

        }
    }

    sum2 = sum2 / 3
    if (sum1 == sum2) {
        console.log("true")
    } else {
        console.log("false")
    }

}
solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
])