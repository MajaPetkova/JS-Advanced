function solve(num) {

    for (let i = 1; i <= num; i++) {
        console.log("*".repeat(num).split("").join(' '))
    }
    if (num == "") {
        for (let i = 1; i <= 5; i++) {
            console.log("*".repeat(5).split("").join(" "))
        }
    }
}
solve(3)
solve("")