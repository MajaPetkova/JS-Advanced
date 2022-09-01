function solve(matrix) {
    let newArr = [];
    for (let row of matrix) {
        for (let el of row) {
            newArr.push(el)
        }
    }
    newArr.sort((a, b) => {
        return b - a
    })
    console.log(newArr[0])
}
solve([
    [20, 50, 10],
    [8, 33, 145]
])