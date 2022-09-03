// describe('Demo Test', () => {

//     it('passing test', () => {
//         'do nothing';
//     });
//     it('failing test', () => {
//         throw Error('on purpouse')
//     });
// })

// const { expect } = require('chai');
// const { sum } = require('./myModule');

describe('demo test', () => {
    it('works with 5 and 3', () => {
        expect(sum(5, 3)).to.equal(8)
            // if (sum(5, 3) != 8) {
            //     throw Error('Did not work as expected')
            // }
    })
})



// const { expect } = require('chai');
// const isSymmetric = require('./05symetry');

// describe('Symmetry Checker', () => {
//     it('return true for symmetric array', () => {
//         expect(isSymmetric([1, 2, 2, 1])).to.be.true;
//     })
// })