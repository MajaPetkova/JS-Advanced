function solve(arr) {
    let num = 1;
    let result = [];
    arr.forEach(el => {

        if (el === "add") {
            result.push(num)
        } else if (el === "remove") {
            result.pop()
        }
        num++
    });
    if (result.length === 0) {
        console.log("Empty")
    } else {
        console.log(result.join('\n'))
    }
}
solve(['add',
    'add',
    "remove",
    'add',
    'add'
])