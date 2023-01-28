let expect = chai.expect;

const testDeck1 = new Cards();
testDeck1.createDeck(); //creates a new deck of cards for test

describe('Test WAR! game functions:', function() {
    describe(`Check createDeck method in Cards class`, function() {
        it(`should create a new deck containing 52 cards`, function() {
            expect(testDeck1.deck.length).to.equal(52);
        });
    });

    describe('Check shuffle method:', function() {
        it('testDeck2 (shuffled deck) should not be the same as testDeck1 (unshuffled deck)', function() {
            const testDeck2 = new Cards();
            testDeck2.createDeck();
            testDeck2.shuffleTheDeck();
            expect(testDeck1).to.not.equal(testDeck2);
        });
    });
});