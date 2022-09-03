const pizzUni = require('./pizzaPlace');
const { expect, assert } = require('chai')

describe('pizzUni', () => {

    describe('makeAnOrderTests', () => {
        it('should return confirmation message for pizza', () => {
            let order = {
                orderedPizza: 'Margaritta'
            }
            expect(pizzUni.makeAnOrder(order)).to.be.equal(`You just ordered ${order.orderedPizza}`)
        });
        it('should return confirmation message for pizza and drink', () => {
            let order = {
                orderedPizza: 'Margaritta',
                orderedDrink: 'Cola'
            }
            expect(pizzUni.makeAnOrder(order)).to.be.equal(`You just ordered ${order.orderedPizza} and ${order.orderedDrink}.`)
        })
        it('should throw when no oredered pizza', () => {
            let order = {}
            expect(() => pizzUni.makeAnOrder(order)).to.throw('You must order at least 1 Pizza to finish the order.')

        })
        it('should throw when only oredered drink', () => {
            let order = {
                orderedDrink: 'Cola'
            }
            expect(() => pizzUni.makeAnOrder(order)).to.throw('You must order at least 1 Pizza to finish the order.')
        })
        it('should throw when no order', () => {
            expect(() => pizzUni.makeAnOrder()).to.throw()
        })
    })
    describe('getRemainingWork', () => {
        it('should return all orders completed when two ready statuses are given', () => {
            let startusArr = [{
                pizzaName: 'Margaritta',
                status: 'ready'
            }, {
                pizzaName: 'Capricioza',
                status: 'ready'

            }]
            expect(pizzUni.getRemainingWork(startusArr)).to.equal('All orders are complete!')
        })
        it('should return all orders completed when one ready status is given', () => {
            let startusArr = [{
                pizzaName: 'Margaritta',
                status: 'ready'
            }]
            expect(pizzUni.getRemainingWork(startusArr)).to.equal('All orders are complete!')
        })
        it('should return remainig pizzas when there is one pending order', () => {
            let startusArr = [{
                pizzaName: 'Margaritta',
                status: 'prepearing'
            }, {
                pizzaName: 'Capricioza',
                status: 'ready'

            }]
            expect(pizzUni.getRemainingWork(startusArr)).to.equal('The following pizzas are still preparing: Margaritta.')
        })
        it('should return remainig pizzas when there is  more than one pending order', () => {
            let startusArr = [{
                pizzaName: 'Margaritta',
                status: 'prepearing'
            }, {
                pizzaName: 'Capricioza',
                status: 'prepearing'

            }]
            expect(pizzUni.getRemainingWork(startusArr)).to.equal('The following pizzas are still preparing: Margaritta, Capricioza.')
        })
    })
    describe('orderType', () => {
        it('should return total sum when type of order is Delivery', () => {
            let totalSum = 10;
            let orderType = 'Delivery'

            expect(pizzUni.orderType(totalSum, orderType)).to.equal(totalSum)
        })
        it('should return total sum when type of order is Delivery', () => {
            let totalSum = 10;
            let orderType = 'Delivery'

            expect(pizzUni.orderType(totalSum, orderType)).to.equal(totalSum)
        })
        it('should return total sum when type of order is Carry Out', () => {
            let totalSum = 10;
            let orderType = 'Carry Out'

            expect(pizzUni.orderType(totalSum, orderType)).to.equal(9)
        })
        it('should return total sum when using floating point num', () => {
            let totalSum = 10.50;
            let orderType = 'Carry Out'

            expect(pizzUni.orderType(totalSum, orderType)).to.equal(9.45)
        })
    })
})