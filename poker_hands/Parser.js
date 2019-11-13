import Card from "./Card";
import Hand from "./Hand";

class Parser {
    parseHands(input) {
        const result = input.match(/Black: (.*)  White: (.*)/);
        return {
            "Black": this.parseHand(result[1]),
            "White": this.parseHand(result[2])
        }
    }

    parseHand(cardsString) {
        const result = [];
        for (const cardCode of cardsString.split(' ')) {
            result.push(new Card(cardCode));
        }
        return new Hand(result);
    }
}

export default Parser;
