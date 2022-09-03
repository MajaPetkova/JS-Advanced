const dealership = require('./dealerShip');
const { expect } = require('chai');

describe('dealership', () => {

    describe('newCarCost', () => {

        it('should check if you pass an old car', () => {
            expect(dealership.newCarCost('Audi A4 B8', 20000)).to.be.equal(5000);
            expect(dealership.newCarCost('Audi A6 4K', 30000)).to.be.equal(10000);

        });
        it('should check if you pass a new car', () => {
            expect(dealership.newCarCost('Reno', 20000)).to.be.equal(20000);

        });
    });
    describe('carEquipment', () => {
        it('should return array with all selected extras', () => {

            let extraArr = ['e1', 'e2', 'e3', 'e4', 'e5'];
            let indexArr = [0, 1, 3]
            expect(dealership.carEquipment(extraArr, indexArr)).to.be.eql(['e1', 'e2', 'e4'])
                // let extraArr = ['e1', 'e2', 'e3', 'e4', 'e5'];
            indexArr = [2, 4];
            expect(dealership.carEquipment(extraArr, indexArr)).to.be.eql(['e3', 'e5'])
        })
    })
    describe('euroCategory', () => {

        it('returns ecology of the car', () => {
            expect(dealership.euroCategory(1)).to.equal('Your euro category is low, so there is no discount from the final price!')
        })
        it('category lower than 4', () => {
            expect(dealership.euroCategory(1)).to.equal('Your euro category is low, so there is no discount from the final price!')
        })
        it('category lower than 4', () => {
            expect(dealership.euroCategory(3)).to.equal('Your euro category is low, so there is no discount from the final price!')
        })
        it("the function checks if u are giving correct number", () => {
            expect(dealership.euroCategory(5)).to.equal(`We have added 5% discount to the final price: 14250.`)
        })
        it('category higher than 4', () => {
            expect(dealership.euroCategory(5)).to.include(' added 5% discount ')
        })
        it('category equal than 4', () => {
            expect(dealership.euroCategory('4')).to.include(' added 5% discount ')
        })
        it('category equal than 4', () => {
            expect(dealership.euroCategory(4)).to.include(' added 5% discount ')
        })

    })

})