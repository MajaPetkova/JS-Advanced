const isOddOrEven = require('./index');
const { assert } = require('chai');
describe('isOddOrEven', () => {

    //invalid input tests
    it('should return undefind if the parametar is number', () => {
        assert.equal(isOddOrEven(10), undefined)
    });
    it('should return undefind if the parametar is object', () => {
        assert.equal(isOddOrEven({}), undefined)
    });
    it('should return undefind if the parametar is array', () => {
        assert.equal(isOddOrEven([]), undefined)
    });
    it('should return undefined if the parametar is undefined', () => {
        assert.equal(isOddOrEven(undefined), undefined)
    });
    //Valid input tests
    it('should return even as result', () => {
        assert.equal(isOddOrEven('Hi'), 'even')
    });
    it('should return odd as result', () => {
        assert.equal(isOddOrEven('Hello'), 'odd')
    });
    // it('should return odd as result', () => {
    //     assert.equal(isOddOrEven('Helo'), 'odd')
    // });
})