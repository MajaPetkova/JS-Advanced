function city(name, population, treasury) {
    let result = {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += Math.floor(this.population * this.taxRate)
        },
        applyGrowth(percent) {
            this.population += Math.floor(this.population * (percent / 100))
        },
        applyRecession(percent) {
            this.treasury -= Math.ceil(this.treasury * (percent / 100))
        }
    };
    return result
}
let tortuga = (city("Tortuga", 7000, 15000))
console.log(tortuga)
tortuga.collectTaxes();
console.log(tortuga)
tortuga.applyGrowth(5);
console.log(tortuga);
tortuga.applyRecession(10);
console.log(tortuga)