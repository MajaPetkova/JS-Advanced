const ChristmasMovies = require('./02. Christmas Movies_Resources');
const { expect, assert } = require('chai');

describe('initializing class', () => {
    let sample = null;
    beforeEach(() => {
        sample = new ChristmasMovies()
    })
    it('Is an object', () => {
        expect(typeof sample).to.equal('object')
    })
    it('is an instance of the class', () => {
        expect(sample instanceof ChristmasMovies).to.be.true;
    })
    it('is initialized without Error', () => {
        expect(() => { new ChristmasMovies() }).to.not.throw();
    })
    it('has all of its initial properties', () => {
        expect(sample.hasOwnProperty('movieCollection')).to.be.true;
        expect(sample.hasOwnProperty('watched')).to.be.true;
        expect(sample.hasOwnProperty('actors')).to.be.true;
        expect(typeof sample.buyMovie).to.equal('function');
        expect(typeof sample.discardMovie).to.equal('function');
        expect(typeof sample.watchMovie).to.equal('function');
        expect(typeof sample.favouriteMovie).to.equal('function');
        expect(typeof sample.mostStarredActor).to.equal('function');
    })
});
describe('buyMovie method', () => {
    let sample = null;
    beforeEach(() => {
        sample = new ChristmasMovies()
    })
    it('Displays success message', () => {
        expect(sample.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']))
            .to.equal('You just got Home Alone to your collection in which Macaulay Culkin, Joe Pesci, Daniel Stern are taking part!')
    })
    it('Adds the movie successfully', () => {
        sample.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'])
        expect(sample.movieCollection).to.deep.equal([{
            name: 'Home Alone',
            actors: ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']
        }])
    })
    it('Adds multiple movies successfully', () => {
        sample.buyMovie('Last Christmas', ['Madison Ingoldsby', 'Emma Thompson', 'Boris Isakovic'])
        sample.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'])

        expect(sample.movieCollection).to.deep.equal([{
                name: 'Last Christmas',
                actors: ['Madison Ingoldsby', 'Emma Thompson', 'Boris Isakovic']
            },
            {
                name: 'Home Alone',
                actors: ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']
            }
        ])
    })
    it('throws an error with an existing movie is passed', () => {
        sample.buyMovie('Last Christmas', ['Madison Ingoldsby', 'Emma Thompson', 'Boris Isakovic'])
        expect(() => {
            sample.buyMovie('Last Christmas', ['Madison Ingoldsby', 'Emma Thompson', 'Boris Isakovic'])
        }).to.throw('You already own Last Christmas in your collection!')
    })
})
describe('discardMovie', () => {
    let sample = null;
    beforeEach(() => {
        sample = new ChristmasMovies()
    })

    it('Throws an error when a non-existing movie is passed', () => {
        expect(() => {
            sample.discardMovie('Shrek')
        }).to.throw('Shrek is not at your collection!')
    })
    it('Display success message and remove movie', () => {
        sample.buyMovie('Shrek', ['Cameron Diaz']);
        sample.watchMovie('Shrek');

        expect(sample.discardMovie('Shrek')).to.equal('You just threw away Shrek!')
        expect(sample.movieCollection).to.deep.equal([])
    })
    it('Throws an error when movie hasnt been watched', () => {
        sample.buyMovie('Shrek', ['Cameron Diaz'])
        expect(() => { sample.discardMovie('Shrek') }).to.throw('Shrek is not watched!')
    })

})
describe('watchMovie method', () => {
    let sample = null;
    beforeEach(() => {
        sample = new ChristmasMovies();
        sample.buyMovie('Shrek', ['Cameron Diaz', 'Eddie Murphy']);
    })
    it('adds the movie to watchlist', () => {
        sample.watchMovie('Shrek');
        expect(sample.watched['Shrek']).to.equal(1)
    })
    it('increase the watch counter', () => {
        sample.watchMovie('Shrek');
        sample.watchMovie('Shrek');
        expect(sample.watched['Shrek']).to.equal(2)
    })
    it('Throws an error when watching a non-existing movie', () => {
        expect(() => { sample.watchMovie('Majorka') }).to.throw('No such movie in your collection!')
    })
})
describe('Favorite Movie method', () => {
    let sample = null;
    beforeEach(() => {
        sample = new ChristmasMovies();
        sample.buyMovie('Shrek 2', ['Cameron Diaz', 'Eddie Murphy']);
        sample.buyMovie('Shrek', ['Cameron Diaz', 'Eddie Murphy']);
        sample.watchMovie('Shrek 2')
        sample.watchMovie('Shrek 2')

        sample.watchMovie('Shrek')
        sample.buyMovie('Shrek 3', ['Cameron Diaz', 'Eddie Murphy']);
        sample.watchMovie('Shrek 3')
        sample.watchMovie('Shrek 3')
        sample.watchMovie('Shrek 3')
    })

    it('sort the movie correctly', () => {
        expect(sample.favouriteMovie()).to.equal('Your favourite movie is Shrek 3 and you have watched it 3 times!')
    })
    it('Throws error without watched movie', () => {
        const newSample = new ChristmasMovies();

        expect(() => { newSample.favouriteMovie() }).to.throw('You have not watched a movie yet this year!')
    })
})
describe('mostStarredActor method', () => {
    let sample = null;
    beforeEach(() => {
        sample = new ChristmasMovies();
        sample.buyMovie('Shrek 2', ['Cameron Diaz', 'Eddie Murphy']);
        sample.buyMovie('Shrek', ['Cameron Diaz', 'Eddie Murphy']);
        sample.watchMovie('Shrek 2')
        sample.watchMovie('Shrek 2')

        sample.watchMovie('Shrek')
        sample.buyMovie('Shrek 3', ['Cameron Diaz', 'Eddie Murphy']);
        sample.watchMovie('Shrek 3')
        sample.watchMovie('Shrek 3')
        sample.watchMovie('Shrek 3')
    })
    it('throws an error if no movie has been watched', () => {
        const newSample = new ChristmasMovies();
        expect(() => {
            newSample.mostStarredActor()
        }).to.throw('You have not watched a movie yet this year!')
    })
    it('Prints the correct message', () => {
        expect(sample.mostStarredActor()).to.equal(
            'The most starred actor is Cameron Diaz and starred in 3 movies!'
        );
    });
})