function solve(input) {
    let juice = {};
    let totalBottles = {}

    for (let line of input) {
        let [juiceName, juiceQuantity] = line.split(' => ')
        juiceQuantity = Number(juiceQuantity)
            // let juiceBottles = 0;
        if (!juice.hasOwnProperty(juiceName)) {

            juice[juiceName] = juiceQuantity;

        } else {
            juice[juiceName] += juiceQuantity;
        }
        if (juice[juiceName] >= 1000) {
            let juiceLeft = juice[juiceName] % 1000;
            let juiceBottles = Math.floor((juice[juiceName] - juiceLeft) / 1000)
            totalBottles[juiceName] = juiceBottles;

        } else {
            let juiceBottles = 0;

        }


    }
    for (let [name, bottes] of Object.entries(totalBottles)) {
        console.log(`${name} => ${bottes}`)
    }

}

solve(['Orange => 2000',
    'Peach => 1432',
    // 'Orange => 500',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
])