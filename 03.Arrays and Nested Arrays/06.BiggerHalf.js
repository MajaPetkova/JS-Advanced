function solve(arr) {
    arr.sort((a, b) => a - b)
    let newArr = arr.splice(arr.length / 2, )
    return newArr

}
console.log(solve([3, 19, 14, 7, 2, 19, 6]))