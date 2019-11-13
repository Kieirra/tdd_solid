class Hand {

    constructor(cards) {
        this.cards = cards;
    }

    sortCardByDsc() {
        return this.cards.sort((a, b) => b.value - a.value)
    }

    isContainingPair() {
        return this.getHighestPair().length > 0;
    }

    getHighestPair() {
        const cardValues = []
        cardValues.push(this.cards[0].value);
        for (let i = 1; i < this.cards.length; i++) {
            const card = this.cards[i]
            if (cardValues.includes(card.value)) {
                const pairCard = this.cards.find(c => this.isPairCard(c, card));
                return [pairCard, card];
            } else {
                cardValues.push(this.cards[i].value);
            }
        }
        return [];
    }

    isPairCard(c, card) {
        return c.value === card.value && c !== card;
    }
}

export default Hand;
