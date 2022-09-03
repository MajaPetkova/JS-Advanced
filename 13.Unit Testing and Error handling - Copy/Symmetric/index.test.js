const { expect } = require('chai');
const isSymmetric = require('./index.js');
describe('Symetry Checker', () => {
    it('returns true for symmetric array', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    });
    it('returns false for nosymetric array', () => {
        expect(isSymmetric([1, 2, 3])).to.be.false;
    });
    it('returns false for type-different symetric array', () => {
        expect(isSymmetric([1, 2, '1'])).to.be.false;
    });
    it('returns false for non-array', () => {
        expect(isSymmetric(5)).to.be.false;
    });
    it('returns true for symetric array with odds number of elements', () => {
        expect(isSymmetric([1, 2, 1])).to.be.true;
    });
    it('returns true for symetric array with strings', () => {
        expect(isSymmetric(["a", "b", "b", "a"])).to.be.true;
    });
    it('returns false for non-symetric array with strings', () => {
        expect(isSymmetric(["a", "b", "c"])).to.be.false;
    });
    it('returns false for string paraeter', () => {
        expect(isSymmetric("abba")).to.be.false;
    });
})