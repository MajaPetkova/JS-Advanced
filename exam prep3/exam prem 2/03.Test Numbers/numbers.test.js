const testNumbers = require('./testNumbers');
const { expect } = require('chai');

describe('Test Numbers', () => {
    describe('sumNumbers', () => {
        it('works with valid numbers', () => {
            expect(testNumbers.sumNumbers(2, 3)).to.equal('5.00')
        });
        it('works with negativ numbers', () => {
            expect(testNumbers.sumNumbers(2, -3)).to.equal('-1.00')
        });
        it('works with floating point', () => {
            expect(testNumbers.sumNumbers(2.222, 3.666)).to.equal('5.89')
        });
        it('returns undefined with string parametars', () => {
            expect(testNumbers.sumNumbers('2', '3')).to.equal(undefined)
        });
        it('works with one invalid parameter', () => {
            expect(testNumbers.sumNumbers('2', 3)).to.equal(undefined)
            expect(testNumbers.sumNumbers(2, '3')).to.equal(undefined)
        });
        it('returns undefined with string parametars', () => {
            expect(testNumbers.sumNumbers(null, null)).to.equal(undefined)
            expect(testNumbers.sumNumbers(null, 3)).to.equal(undefined)
            expect(testNumbers.sumNumbers(2, null)).to.equal(undefined)

        });
    });
    describe('numberChecker', () => {
        it('works with odd value', () => {
            expect(testNumbers.numberChecker(1)).to.contain('odd')
        })
        it('works with even value', () => {
            expect(testNumbers.numberChecker(2)).to.contain('even')
        });
        it('works with empty string', () => {
            expect(testNumbers.numberChecker('')).to.contain('even')
        })
        it('works with odd value as string', () => {
            expect(testNumbers.numberChecker('1')).to.contain('odd')
        })
        it('works with even value as string', () => {
            expect(testNumbers.numberChecker('2')).to.contain('even')
        })
        it('detects invalid parameters', () => {
            expect(() => testNumbers.numberChecker('a')).to.throw();
        })
    });
    describe('averageSumArray', () => {
        it('works with integers', () => {
            expect(testNumbers.averageSumArray([1, 2, 3])).to.equal(2)
        })
        it('works with integers', () => {
            expect(testNumbers.averageSumArray([1.5, 2.5, 3.5])).to.equal(2.5)
        })
    })
})