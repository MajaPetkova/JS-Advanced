function solve(num) {
    let arr = num.toString();
    let isSame = true;
    let sum = Number(arr[0]);

    for (let i = 1; i < arr.length; i++) {
        sum += Number(arr[i])

        if (arr[i] !== arr[i - 1]) {
            isSame = false
        }

    }
    console.log(isSame)
    console.log(sum)
}
solve(2222222)
solve(1234)