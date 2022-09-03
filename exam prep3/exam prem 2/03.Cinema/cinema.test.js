const { expect } = require('chai');
const cinema = require('./cinema')
describe('cinema', () => {
    describe('showMovies', () => {
        it('empty array', () => {
            expect(cinema.showMovies([])).to.be.equal('There are currently no movies to show.')
        });
        it('array of movies', () => {
            expect(cinema.showMovies(['King Kong', 'The Tomorrow War', 'Joker'])).to.be.equal('King Kong, The Tomorrow War, Joker')
        });
        it('array with one element', () => {
            expect(cinema.showMovies(['King Kong'])).to.be.equal('King Kong')
        })
    });
    describe('ticketPrice', () => {
        it('premiere price ', () => {
            expect(cinema.ticketPrice('Premiere')).to.be.equal(12.00)
        });
        it('Normal price ', () => {
            expect(cinema.ticketPrice('Normal')).to.be.equal(7.50)
        });
        it('Discount price ', () => {
            expect(cinema.ticketPrice('Discount')).to.be.equal(5.50)
        });
        it('invalid price ', () => {
            expect(() => cinema.ticketPrice('')).to.throw('Invalid projection type.')
            expect(() => cinema.ticketPrice('Invalid')).to.throw('Invalid projection type.')
        });
    })
    describe('swapSeatsInHall', () => {
        it('only one param given', () => {
            expect(cinema.swapSeatsInHall(1)).to.be.equal('Unsuccessful change of seats in the hall.')
        });
        it('only one string param given', () => {
            expect(cinema.swapSeatsInHall('1')).to.be.equal('Unsuccessful change of seats in the hall.')
        });
        it('only invalid param given', () => {
            expect(cinema.swapSeatsInHall('1', 5)).to.be.equal('Unsuccessful change of seats in the hall.')
        });
        it('only two string param given', () => {
            expect(cinema.swapSeatsInHall('1', '5')).to.be.equal('Unsuccessful change of seats in the hall.')
        });
        it('only one decimal number given', () => {
            expect(cinema.swapSeatsInHall(1, 5.25)).to.be.equal('Unsuccessful change of seats in the hall.')
        });
        it('only one decimal number given', () => {
            expect(cinema.swapSeatsInHall({ film: 2 }, 21)).to.be.equal('Unsuccessful change of seats in the hall.')
        });
        it('only one invalid seat given', () => {
            expect(cinema.swapSeatsInHall(0, 20)).to.be.equal('Unsuccessful change of seats in the hall.')
        });
        it('only one negativ number given', () => {
            expect(cinema.swapSeatsInHall(1, -8)).to.be.equal('Unsuccessful change of seats in the hall.')
        });
        it('same numbers given', () => {
            expect(cinema.swapSeatsInHall(5, 5)).to.be.equal('Unsuccessful change of seats in the hall.')
        });
        it('first negativ number given', () => {
            expect(cinema.swapSeatsInHall(-1, 19)).to.be.equal('Unsuccessful change of seats in the hall.')
        });
        it('corect given output', () => {
            expect(cinema.swapSeatsInHall(15, 1)).to.be.equal('Successful change of seats in the hall.')
        });
        it('corect given first and second input', () => {
            expect(cinema.swapSeatsInHall(1, 20)).to.be.equal('Successful change of seats in the hall.')
        });
        it('invalid input', () => {
            expect(cinema.swapSeatsInHall([2, 2], 4)).to.be.equal('Unsuccessful change of seats in the hall.')
        });
        it('invalid input', () => {
            expect(cinema.swapSeatsInHall(undefined, 4)).to.be.equal('Unsuccessful change of seats in the hall.')
        });
    })

})