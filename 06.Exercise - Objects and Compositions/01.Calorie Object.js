function solve(arr) {
    let products = {};
    for (let i = 0; i < arr.length; i += 2) {
        products[arr[i]] = Number(arr[i + 1])

    }
    console.log(products)
}
solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])