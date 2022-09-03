const sumOfTwoNums = require('./index');
const { assert } = require('chai');

describe('sumOfTwoNums', () => {

    it('test with two numbers', () => {
        assert.equal(sumOfTwoNums(3, 4), 7);
    });
    it('test with two numbers', () => {
        assert.equal(sumOfTwoNums('3', 4), 7);
    });
});