function solve(arr) {

    let biggest = Number.MIN_SAFE_INTEGER;

    let result = arr.filter(x => {
        if (x >= biggest) {
            biggest = x;
            return true
        } else {
            return false
        }
    })
    return result
}
console.log(solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24
]))