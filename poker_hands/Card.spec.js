import Card from "./Card.js";


describe("A Card", () => {
	it("should parse 3H code", () => {
		const card = new Card("3H");
		expect(card.value).toBe("3");
		expect(card.color).toBe("H");
		expect(card.fullName).toBe("3");
	})

	it("should parse Ten card", () => {
		const card = new Card("TH");
		expect(card.fullName).toBe("10");
	})

	it("should parse Jack card", () => {
		const card = new Card("JH");
		expect(card.fullName).toBe("Jack");
	})

	it("should parse Queen card", () => {
		const card = new Card("QH");
		expect(card.fullName).toBe("Queen");
	})

	it("should parse King card", () => {
		const card = new Card("KH");
		expect(card.fullName).toBe("King");
	})

	it("should parse Ace card", () => {
		const card = new Card("AH");
		expect(card.fullName).toBe("Ace");
	})
});

describe("A card comparison", () => {

	it("should tell than 3 is highest than 2", () => {
		const result = new Card("3H").isHighestThan(new Card("2H"));
		expect(result).toBe(true);
	})

	it("should tell than A is highest than 9", () => {
		const result = new Card("AH").isHighestThan(new Card("9H"));
		expect(result).toBe(true);
	})

	it("should tell than Q is lowest than K", () => {
		const result = new Card("QH").isHighestThan(new Card("KH"));
		expect(result).toBe(false);
	})

})