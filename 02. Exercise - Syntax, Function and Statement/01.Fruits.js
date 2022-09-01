function fruit(name, gram, price) {
    let kg = gram / 1000;
    let sum = kg * price;
    console.log(`I need $${sum.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${name}.`)

}
fruit("orange", 2500, 1.80)