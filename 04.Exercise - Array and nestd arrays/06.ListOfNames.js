function solve(arr) {
    let sorted = arr.sort((a, b) =>
        a.localeCompare(b)
    )
    let ordertNum = 1;
    for (let name of sorted) {
        console.log(`${ordertNum}.${name}`)
        ordertNum++
    }

}
solve(["John", "Bob", "Christina", "Ema"])