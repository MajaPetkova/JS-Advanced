const { expect } = require('chai');
const { createCalculator } = require('./index');
describe('Sumator', () => {
    let instance = {};

    beforeEach(() => {
        instance = createCalculator();
    });
    it('has all methods', () => {
        expect(instance).to.has.ownProperty('add');
        expect(instance).to.has.ownProperty('subtract');
        expect(instance).to.has.ownProperty('get');
    });
    it('starts empty', () => {
        expect(instance.get()).to.equal(0)
    })
    it('add single numbers', () => {
        instance.add(1);
        expect(instance.get()).to.equal(1)
    });
    it('add multiple numbers', () => {
        instance.add(1);
        instance.add(2);
        expect(instance.get()).to.equal(3)
    });
    it('add multiple numbers', () => {
        instance.add(1);
        instance.add(2);
        expect(instance.get()).to.equal(3)
    });
    it('subtract single numbers', () => {
        instance.add(1);
        expect(instance.get()).to.equal(-1)
    });
    it('subrtact multiple numbers', () => {
        instance.subtract(3);
        instance.subtract(2);
        expect(instance.get()).to.equal(-3)
    });
    it('add and subrtact', () => {
        instance.add(1);
        instance.subtract(2);
        expect(instance.get()).to.equal(-1)
    });
    it('works with numbers as strings', () => {
        instance.add('1');
        instance.subtract('2');
        expect(instance.get()).to.equal('-1')
    })

})