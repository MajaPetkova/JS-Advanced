const mathEnforcer = require('./index.js');
const { assert } = require('chai');
describe('mathEnforcer', () => {
    describe('add five test', () => {
        // test with incorrect input
        it('Should return undefined with a string', () => {
            assert(mathEnforcer.addFive('Test') === undefined)
        });
        it('Should return undefined with an object', () => {
            assert(mathEnforcer.addFive({}) === undefined)
        });
        it('Should return undefined with an array', () => {
            assert(mathEnforcer.addFive([]) === undefined)
        });
        it('Should return undefined with an undefined', () => {
            assert(mathEnforcer.addFive(undefined) === undefined)
        });
        it('Should return undefined with an null', () => {
            assert(mathEnforcer.addFive(null) === undefined)
        });
        //test with correct input
        it('Positive number +5', () => {
            assert(mathEnforcer.addFive(5) === 10)
        });
        it('Positive integer +5', () => {
            assert(mathEnforcer.addFive(5.3) === 10.3)
        });
        it('Negative number +5', () => {
            assert(mathEnforcer.addFive(-5) === 0)
        });
    });

    describe('subtract ten test', () => {
        //test with incorect input
        it('Should return undefined with a string', () => {
            assert(mathEnforcer.subtractTen('Test') === undefined)
        });
        it('Should return undefined with an object', () => {
            assert(mathEnforcer.subtractTen({}) === undefined)
        });
        it('Should return undefined with an array', () => {
            assert(mathEnforcer.subtractTen([]) === undefined)
        });
        it('Should return undefined with an undefined', () => {
            assert(mathEnforcer.subtractTen(undefined) === undefined)
        });
        it('Should return undefined with an null', () => {
            assert(mathEnforcer.subtractTen(null) === undefined)
        });

        //test with correct input
        it('Positive number -10', () => {
            assert(mathEnforcer.subtractTen(5) === -5)
        });
        it('Decimal number -10', () => {
            assert(mathEnforcer.subtractTen(10.5) === 0.5)
        });
        it('Negative number -10', () => {
            assert(mathEnforcer.subtractTen(-5) === -15)
        });
    });
    describe('sum of two numbers test', () => {
        //test with correct input
        it('Two positive integer numbers', () => {
            assert(mathEnforcer.sum(10, 20) === 30)
        });
        it('Two negative integer numbers', () => {
            assert(mathEnforcer.sum(-10, -20) === -30)
        });
        it('Two decimal numbers', () => {
            assert(mathEnforcer.sum(10.5, 20.5) === 31)
        });
        //test with incorrect input
        it('First parametar is string and second is a number ', () => {
            assert(mathEnforcer.sum("", 20) === undefined)
        });
        it('Second parametar is string and first is a number ', () => {
            assert(mathEnforcer.sum(1, "") === undefined)
        });
    })

})