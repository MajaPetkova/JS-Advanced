function odd(arr) {
    let oddNums = arr.filter((v, i) => i % 2 == 1);
    let doubled = oddNums.map(x => x * 2);
    doubled.reverse()
    console.log(doubled.join(" "))
}
odd([10, 15, 20, 25])