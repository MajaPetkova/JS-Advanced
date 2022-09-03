function createCard(face, suit) {
    const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    const suits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    }
    if (Object.keys(suits).includes(suit) == false) {
        throw new Error('Invalid suit')
    }
    if (faces.includes(face) == false) {
        throw new Error('Invalid face')
    }
    return {
        face,
        suits: suits[suit],
        toString() {
            return this.face + this.suits
        }
    }
}
const card1 = createCard('A', 'S');
console.log(card1.toString())
createCard('10', 'H')
createCard('1', 'C')