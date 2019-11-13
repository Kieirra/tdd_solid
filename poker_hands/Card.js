
const SPECIAL_CARDS = {
    "T": {
        name: "10",
        value: 10
    },
    "J": {
        name: "Jack",
        value: 11
    },
    "Q": {
        name: "Queen",
        value: 12
    },
    "K": {
        name: "King",
        value: 13
    },
    "A": {
        name: "Ace",
        value: 14
    }
}

class Card {

    constructor(code) {
        this.name = code[0];
        this.color = code[1];
        this.value = this.getValue(this.name);
        this.fullName = this.getfullName(this.name);
    }

    getValue(name) {
        let value = name;
        if (SPECIAL_CARDS[name]) {
            value = SPECIAL_CARDS[name].value;
        }
        return value;
    }

    getfullName(cardValue) {
        let name = "";
        if (SPECIAL_CARDS[cardValue]) {
            name = SPECIAL_CARDS[cardValue].name;
        } else {
            name = cardValue;
        }
        return name;
    }

    isHighestThan(card) {
        return this.value > card.value;
    }

}

export default Card;
