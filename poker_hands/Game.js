class Game {

    constructor(parser) {
        this.handsParser = parser;
    }

    play(input) {
        const hands = this.handsParser.parseHands(input);

        let winner, pokerHands, card;

        pokerHands = 'pair';
        if (this.isAllHandsContainingPair(hands)) {
            if (this.isBlackPairHighest(hands)) {
                winner = "Black";
                card = hands.Black.getHighestPair()[0];
                return this.print({ winner : "Black", pokerHands, card });
            } else if (this.isWhitePairHighest(hands)) {
                winner = "White";
                card = hands.White.getHighestPair()[0];
                return this.print({ winner, pokerHands, card });
            }
        }
        else if (hands.Black.isContainingPair()) {
            winner = "Black";
            card = hands.Black.getHighestPair()[0];
            return this.print({ winner, pokerHands, card });
        } else if (hands.White.isContainingPair()) {
            winner = "White";
            card = hands.White.getHighestPair()[0];
            return this.print({ winner, pokerHands, card });
        }

        pokerHands = 'high card';
        const blackHandsOrdered = hands.Black.sortCardByDsc();
        const whiteHandsOrdered = hands.White.sortCardByDsc();
        for (let i = 0; i < blackHandsOrdered.length; i++) {
            let blackCard = blackHandsOrdered[i];
            let whiteCard = whiteHandsOrdered[i];
            if (blackCard.isHighestThan(whiteCard)) {
                winner = "Black";
                card = blackCard;
                return this.print({ winner, pokerHands, card });
            } else if (whiteCard.isHighestThan(blackCard)) {
                winner = "White";
                card = whiteCard;
                return this.print({ winner, pokerHands, card });
            }
        }
        return this.printTie();
    }
    

    isWhitePairHighest(hands) {
        return hands.Black.getHighestPair()[0].value < hands.White.getHighestPair()[0].value;
    }

    isBlackPairHighest(hands) {
        return hands.Black.getHighestPair()[0].value > hands.White.getHighestPair()[0].value;
    }

    isAllHandsContainingPair(hands) {
        return hands.Black.isContainingPair() && hands.White.isContainingPair();
    }

    print({ winner, pokerHands, card }) {
        return `${winner} wins. - with ${pokerHands}: ${card.fullName}`;
    }

    printTie() {
        return "Tie.";
    }

}

export default Game;
