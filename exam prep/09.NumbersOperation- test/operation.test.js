const numberOperations = require('./03. Number Operations_Resources');
const { expect, assert } = require('chai');

describe('numberOperation', () => {
    describe('powNumber', () => {
        it('works with valid input', () => {
            expect(numberOperations.powNumber(3)).to.be.equal(9)
        });
        it('works with zero', () => {
            expect(numberOperations.powNumber(0)).to.be.equal(0)
        });
        it('works with negative number', () => {
            expect(numberOperations.powNumber(-2)).to.be.equal(4)
        });
    })
    describe('numberChecker', () => {
        it('throws error with a string ', () => {
            expect(() => numberOperations.numberChecker('text')).to.throw('The input is not a number!');
        });
        it('works with array', () => {
            expect(() => numberOperations.numberChecker([1, 2])).to.throw('The input is not a number!');
        });
        it('works with object', () => {
            expect(() => numberOperations.numberChecker({ num: 2 })).to.throw('The input is not a number!');
        });
        it('works with undefined', () => {
            expect(() => numberOperations.numberChecker(undefined)).to.throw('The input is not a number!');
        });
        it('works with two inputs', () => {
            expect(() => numberOperations.numberChecker("text", "book")).to.throw('The input is not a number!');
        });
        it('works with number lower than 100', () => {
            expect(numberOperations.numberChecker(3)).to.be.equal('The number is lower than 100!')
        });
        it('works with number equal than 100', () => {
            expect(numberOperations.numberChecker(100)).to.be.equal('The number is greater or equal to 100!')
        });
        it('works with greater than 100', () => {
            expect(numberOperations.numberChecker(101)).to.be.equal('The number is greater or equal to 100!')
        });
    })


    describe('sumArrays', () => {
        it('should return correct array', () => {
            expect(numberOperations.sumArrays([1, 2, 3], [4, 5, 6])).to.be.eql([5, 7, 9])
        });
        it('should return non simetrical array', () => {
            expect(numberOperations.sumArrays([1, 2, 3, 4], [4, 5, 6])).to.be.eql([5, 7, 9, 4])
        });
        it('should return non simetrical array', () => {
            expect(numberOperations.sumArrays([1, 2, 3, 4], [])).to.be.eql([1, 2, 3, 4])
        });
        it('should return non simetrical array', () => {
            expect(numberOperations.sumArrays([], [1])).to.be.eql([1])
        });
    })
})