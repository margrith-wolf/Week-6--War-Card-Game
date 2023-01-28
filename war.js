/* GAME OF WAR! */

class Cards {
    constructor(suit, value, rank){
        this.suit = suit;
        this.value = value;
        this.rank = rank;
    }
    //create deck of cards. Method help from Chuck
    deck = [];
    createDeck() {
        let suits = ['Hearts', 'Diamond', 'Spades', 'Club'];
        let cardValue = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

        for (let i=0; i < suits.length; i++) {
            for (let x=0; x< cardValue.length; x++){
                let card = {};
                card.suit = suits[i];
                card.value = cardValue[x];
                switch (cardValue[x]) {
                    case 'Ace':
                        card.rank = 1;
                        break;
                    case 'Jack':
                        card.rank = 11;
                        break;
                    case 'Queen':
                        card.rank = 12;
                        break;
                    case 'King':
                        card.rank = 13;
                        break;
                    default:
                        card.rank = cardValue[x];
                }
                this.deck.push(card);
            }
        }    
    };

    //shuffle the deck
    shuffleTheDeck() {
        let deckShuffled = this.deck;

            for (let i = deckShuffled.length - 1; i > 0; i--) {
                const shuffle = Math.floor(Math.random() * (i + 1));
                const z = deckShuffled[i];
                deckShuffled[i] = deckShuffled[shuffle];
                deckShuffled[shuffle] = z;
            };
            return deckShuffled;
    }
};

//create players
class Player {
    constructor(name, hand, score) {
        this.name = name;
        this.hand = hand;
        this.score = score;
    };
};

class Game {
    //start game
    playGame() {

        let newPlay = new Cards;
        newPlay.createDeck();

        newPlay.shuffleTheDeck();
            //console.log(newPlay.deck);

        //2 players, points start at 0, 26 cards to each player
        let player1 = new Player("Player One", newPlay.deck.splice(0,26), 0);
            //console.log(newPlay.deck);
            //console.log(player1);

        let player2 = new Player("Player Two", newPlay.deck, 0);
            //console.log(player2);

        for(let i = 0; i < player1.hand.length; i++) {
            if(player1.hand[i].value > player2.hand[i].value) {
                player1.score += 1;
                console.log(`Player 1 wins this hand!
                Player 1 score: ${player1.score}
                Player 2 score: ${player2.score}`);
            } else if (player2.hand[i].value > player1.hand[i].value) {
                player2.score += 1;
                console.log(`Player 2 wins this hand!
                Player 1 score: ${player1.score}
                Player 2 score: ${player2.score}`);
            } else {
                console.log(`This hand was a tie! No one scores.
                Player 1 score: ${player1.score}
                Player 2 score: ${player2.score}`);
            };
        }; 
        //Game Over: declare winner and score
        if (player1.score > player2.score) {
                console.log(`Congratulations! ${player1.name} won! Final score: ${player1.score} to ${player2.score}`);
        } else if (player2.score > player1.score) {
                console.log(`Congratulations! ${player2.name} won! Final score: ${player2.score} to ${player1.score}`);
        } else {
                console.log('This game ended in a tie! No winners here!');
        };
    };
};

const game = new Game();
game.playGame();
