function solve(matrix) {
    let counter = 0;
    let newArr = [];
    for (let i = 0; i < matrix.length; i++) {
        let line = matrix[i];
        for (let j = 0; j < line.length; j++) {
            let el = line[j];

            if (i !== matrix.length - 1) {
                if (el === line[j + 1]) {
                    counter++
                }
                if (el === matrix[i + 1][j]) {
                    counter++
                }
            } else if (el === line[j + 1] || el === matrix[i][j + 1]) {
                counter++
            }
        }
    }
    console.log(counter)
}
solve([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
])