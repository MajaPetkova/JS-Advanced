function solve(input) {
    // let brands = new Map();
    // while (input.length > 0) {
    //     let [brand, model, quantity] = input.shift().split(' | ');
    //     let models = new Map();

    //     if (!brands.has(brand)) {
    //         models.set(model, Number(quantity));
    //         brands.set(brand, models)
    //     } else {
    //         quantity = Number(quantity)
    //         let models = brands.get(brand);
    //         models.set(model, quantity);
    //         // console.log(model)
    //         if (models.has(model)) {

    //         }
    //     }
    // }
    // for (let [brand, models] of brands.entries()) {
    //     console.log(brand)
    //     for (let [model, quantity] of models.entries()) {
    //         console.log(`###${model} -> ${quantity}`)
    //     }
    // }
    let brands = {};
    for (let items of input) {
        let [brand, model, quantity] = items.split(' | ')

        if (!brands.hasOwnProperty(brand)) {
            brands[brand] = {}
        }
        if (!brands[brand].hasOwnProperty(model)) {
            brands[brand][model] = 0;
        }
        brands[brand][model] += Number(quantity)
    }
    for (let [brand, models] of Object.entries(brands)) {
        console.log(brand);
        for (let [model, quantity] of Object.entries(models)) {
            console.log(`###${model} -> ${quantity}`)
        }
    }

}
solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
])