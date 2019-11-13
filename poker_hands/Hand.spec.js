import Hand from "./Hand.js";
import Card from "./Card.js";

// Not used anymore
// it("should get highest card", () => {
// 	const hand = new Hand([new Card("KH"), new Card("QD"), new Card("5S"), new Card("9C"), new Card("2D")]);
// 	expect(hand.getHighestCard()).toEqual(new Card("KH"));
// })
	
it("should sort card from the highest to the lowest card", () => {
	const hand = new Hand([new Card("2D"), new Card("QD"), new Card("5S"), new Card("9C"), new Card("KH")]);
	expect(hand.sortCardByDsc()).toEqual([new Card("KH"), new Card("QD"), new Card("9C"), new Card("5S"), new Card("2D")]);
})

it("should detect Pair", () => {
	const hand = new Hand([new Card("KH"), new Card("KD"), new Card("5S"), new Card("9C"), new Card("2D")]);
	expect(hand.isContainingPair()).toBe(true);
})

it("should not detect Pair", () => {
	const hand = new Hand([new Card("2H"), new Card("3D"), new Card("5S"), new Card("9C"), new Card("KD")]);
	expect(hand.isContainingPair()).toBe(false);
})

it("should detect Pair at other than first position", () => {
	const hand = new Hand([new Card("5S"), new Card("KD"), new Card("KH"), new Card("9C"), new Card("2D")]);
	expect(hand.isContainingPair()).toBe(true);
})

it("should get highest pair", () => {
	const hand = new Hand([new Card("KH"), new Card("KD"), new Card("5S"), new Card("9C"), new Card("2D")]);
	expect(hand.getHighestPair()).toEqual([new Card("KH"), new Card("KD")]);
})