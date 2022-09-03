class Parking {
    constructor(capacity) {
        this.capacity = capacity
        this.vehicle = []
    }

    addCar(carModel, carNumber) {
        if (this.vehicle.length >= this.capacity) {
            throw new Error("Not enough parking space.")
        }
        let car = {
            carModel,
            carNumber,
            payed: false,
        }
        this.vehicle.push(car)
        return `The ${carModel}, with a registration number ${carNumber}, parked.`
    }
    removeCar(carNumber) {
        let found = this.vehicle.find(x => x.carNumber == carNumber)
        if (!found) {
            throw new Error("The car, you're looking for, is not found.")
        }
        if (found.payed == false) {
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`)
        }
        let index = this.vehicle.indexOf(found)
        this.vehicle.splice(index, 1)
        return `${carNumber} left the parking lot.`
    }

    pay(carNumber) {
        let found = this.vehicle.find(x => x.carNumber == carNumber);
        if (!found) {
            throw new Error(`${carNumber} is not in the parking lot.`)
        }

        if (found.payed == true) {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`)
        }
        found.payed = true;
        return `${carNumber}'s driver successfully payed for his stay.`
    }
    getStatistics(carNumber) {
        let result = [];
        if (carNumber) {
            let found = this.vehicle.find(x => x.carNumber == carNumber)
            result.push(`${x.carModel} == ${x.carNumber} - ${x.found.payed ? 'Has payed' : 'Not payed'}`)

        } else {
            result.push(`The book collection has ${this.capacity - this.vehicle.length} empty spots left.`)

            this.vehicle
                .sort((a, b) => a.carModel.localeCompare(b.carModel))
                .forEach(x => {
                    result.push(`${x.carModel} == ${x.carNumber} - ${x.payed ? 'Has payed' : 'Not payed'}`)
                })
        }
        return result.join('\n')
    }

}
let parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));