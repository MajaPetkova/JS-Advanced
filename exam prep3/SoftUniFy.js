const { assert } = require("chai");

// all songs - is it object?
describe('SoftUnify', () => {

    it('all songs an object', () => {
        let myClass = new SoftUniFy();
        assert.deepEqual(myClass.allSongs, {})
    })

    it('is the song empty', () => {
        let myClass = new SoftUniFy();
        assert.equal(myClass.playSong('song'),
            `You have not downloaded a song song yet. Use SoftUnify's function downloadSong() to change that!`)

    })
    it('rate artist', () => {
        let myClass = new SoftUniFy();
        assert(myClass.rateArtist('artist'),
            'The artist is not on your artist list')
    })
})