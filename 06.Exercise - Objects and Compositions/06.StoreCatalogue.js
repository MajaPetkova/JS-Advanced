function solve(arr) {
    let sorted = arr.sort((a, b) => a.localeCompare(b))
        //with array

    // let currentEl = [];
    // let char = "";

    // for (let i = 0; i < sorted.length; i++) {
    //     currentEl = sorted[i].split(' : ');

    //     if (sorted[i][0] !== char) {
    //         console.log(sorted[i][0])
    //     }
    //     console.log(`  ${currentEl[0]}: ${currentEl[1]}`);
    //     char = sorted[i][0];
    // }

    //with object
    let obj = {};
    let char = "";
    for (let i = 0; i < sorted.length; i++) {
        let [product, price] = sorted[i].split(' : ');
        obj[product] = price;

        if (product[0] !== char) {
            console.log(product[0])
        }
        console.log(`  ${product}: ${obj[product]}`);
        char = product[0];
    }

}

solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
])