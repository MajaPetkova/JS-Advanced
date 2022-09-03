const lookupChar = require('./index');
const { assert, expect } = require('chai');

describe('lookupChar', () => {
    it('Return char at index', () => {
        expect(lookupChar('Love', 1)).to.be.equal('o')
    });
    it('Return char at index', () => {
        expect(lookupChar('Love', 0)).to.be.equal('L')
    });
    it('Index over the string length', () => {
        assert(lookupChar('Love', 10) === 'Incorrect index')
    });

    it('Negative string index', () => {
        assert(lookupChar('Love', -10) === 'Incorrect index')
    });
    it('Return undefined if first parametar is not a string', () => {
        assert(lookupChar(100, 10) === undefined);
    });
    it('Return undefined if second parametar is a string', () => {
        assert(lookupChar(100, '10') === undefined);
    });
    it('Return undefined with string first parametar and decimal second', () => {
        assert(lookupChar('Love', 10.5) === undefined);
    });

})