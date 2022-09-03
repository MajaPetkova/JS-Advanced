const companyAdministration = require('./companyAdministration');
const { expect } = require('chai');
// const { calculateSalary } = require('./companyAdministration');

describe('companyAdministration', () => {

    describe('hiringEmployee', () => {

        it('works with valid input', () => {
            expect(companyAdministration.hiringEmployee('Pesho', 'Programmer', 3)).to.be.equal('Pesho was successfully hired for the position Programmer.');
        });
        it('works with valid  decimal num', () => {
            expect(companyAdministration.hiringEmployee('Pesho', 'Programmer', 10.2)).to.be.equal('Pesho was successfully hired for the position Programmer.');
        });
        it('works with number > 3', () => {
            expect(companyAdministration.hiringEmployee('Pesho', 'Programmer', 2)).to.be.equal('Pesho is not approved for this position.');
        });
        it('works with number 0', () => {
            expect(companyAdministration.hiringEmployee('Pesho', 'Programmer', 0)).to.be.equal('Pesho is not approved for this position.');
        });
        it('works with invalid input', () => {
            expect(() => companyAdministration.hiringEmployee('Pesho', 'Worker', 2)).to.throw();
        });
        it('works with invalid input', () => {
            expect(() => companyAdministration.hiringEmployee('Pesho', 'Worker', 7)).to.throw();
            expect(() => companyAdministration.hiringEmployee('someone', 'programmer', 3)).to.throw('We are not looking for workers for this position.');
        });
    });
    describe('calculateSalary', () => {
        it('works with valid input', () => {
            expect(companyAdministration.calculateSalary(5)).to.be.equal(75);
        });
        it('works with decimal num', () => {
            expect(companyAdministration.calculateSalary(5.5)).to.be.equal(82.5);
        });
        it('works with 0 input', () => {
            expect(companyAdministration.calculateSalary(0)).to.be.equal(0);
        });
        it('works with valid input', () => {
            expect(companyAdministration.calculateSalary(200.5)).to.equal(4007.5);
            expect(companyAdministration.calculateSalary(161)).to.be.equal(3415);
        });
        it('throws error with string', () => {
            expect(() => companyAdministration.calculateSalary("15")).to.throw();
        });
        it('throws error with negativ num', () => {
            expect(() => companyAdministration.calculateSalary(-1)).to.throw();
        });
        it('throws error with negativ num', () => {
            expect(() => companyAdministration.calculateSalary([-2])).to.throw();
        });
        it('throws error with negativ num', () => {
            expect(() => companyAdministration.calculateSalary(undefined)).to.throw();
        });
        it('throws error with negativ num', () => {
            expect(() => companyAdministration.calculateSalary({})).to.throw();
        });
        it('throws error with negativ num', () => {
            expect(() => companyAdministration.calculateSalary("text")).to.throw();
        });
    })
    describe('firedEmployee', () => {
        it('works with correct input', () => {
            expect(companyAdministration.firedEmployee(['a', 'b', 'c'], 0)).to.equal('b, c');

        });

        it('should throw an Error with invalid index', () => {
            expect(() => companyAdministration.firedEmployee(['a', 'b', 'c'], -2)).to.throw();
            expect(() => companyAdministration.firedEmployee(['a', 'b', 'c'], 0.3)).to.throw();
            expect(() => companyAdministration.firedEmployee(['a', 'b', 'c'], 5)).to.throw();
            expect(() => companyAdministration.firedEmployee(['a', 'b', 'c'], -2.2)).to.throw('Invalid input');
        });
        it('should throw Error with incorrect array', () => {
            expect(() => companyAdministration.firedEmployee({}, 2)).to.throw();
            expect(() => companyAdministration.firedEmployee([], 2)).to.throw();
            expect(() => companyAdministration.firedEmployee(NaN, 2)).to.throw();
            expect(() => companyAdministration.firedEmployee('', 2)).to.throw();
            expect(() => companyAdministration.firedEmployee(42, 2)).to.throw();

        });
    })

})