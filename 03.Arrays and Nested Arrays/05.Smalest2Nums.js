function solve(arr) {
    arr.sort((a, b) => a - b);
    newArr = arr.splice(0, 2)
    console.log(newArr)

}
solve([30, 15, 50, 5])