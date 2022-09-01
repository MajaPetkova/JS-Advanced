function solve(inputArray) {
    const colums = inputArray[0];
    const rows = inputArray[1];
    const startRow = inputArray[2];
    const startCol = inputArray[3];
    let matrix = [];

    for (let row = 0; row < rows; row++) {
        matrix[row] = [];
        for (let col = 0; col < colums; col++) {
            let rowDifference = Math.abs(row - startRow);
            let columnDifference = Math.abs(col - startCol);

            let numberToFill = Math.max(rowDifference, columnDifference) + 1;
            matrix[row][col] = numberToFill;
        }
    }
    matrix.forEach(row => console.log(row.join(' ')))
}
solve([4, 4, 1, 2])