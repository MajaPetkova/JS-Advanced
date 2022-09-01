function solve(array) {
    let result = {};
    for (let el of array) {
        let [town, product, price] = el.split(" | ")
        price = Number(price);

        if (!result[product]) {
            result[product] = {};
        }
        result[product][town] = price;
    }
    // console.log(result)
    for (let prod in result) {
        let sorted = Object.entries(result[prod]).sort((a, b) => a[1] - b[1])
        console.log(`${prod} -> ${sorted[0][1]} (${sorted[0][0]})`)
    }
}
solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
])