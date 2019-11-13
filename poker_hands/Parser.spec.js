import Parser from "./Parser.js";
import Card from "./Card.js";
import Hand from "./Hand.js";

/**
 *  @type {Parser} parser 
 */
let parser;
beforeEach(() => {
	parser = new Parser();
})

// it("should parse hands", () => {
// 	const result = parser.parseHands("Black: 2H 3D 5S 9C KD  White: 2C 3H 4S 8C AH");
// 	expect(result).toEqual({
// 		"Black" : "2H 3D 5S 9C KD",
// 		"White" : "2C 3H 4S 8C AH",
// 	});
// })
	
// it("should parse hands", () => {
// 	const result = parser.parseHands("Black: 2H 3D 5S 9C KD  White: 2C 3H 4S 8C AH");
// 	expect(result).toEqual({
// 		"Black" : ["2H", "3D", "5S", "9C", "KD"],
// 		"White" : ["2C", "3H", "4S", "8C", "AH"],
// 	});
// })
	
// it("should parse hands", () => {
// 	const result = parser.parseHands("Black: 2H 3D 5S 9C KD  White: 2C 3H 4S 8C AH");
// 	expect(result).toEqual({
// 		"Black" : [new Card("2H"), new Card("3D"), new Card("5S"), new Card("9C"), new Card("KD")],
// 		"White" : [new Card("2C"), new Card("3H"), new Card("4S"), new Card("8C"), new Card("AH")],
// 	});
// })

it("should parse hands", () => {
	const result = parser.parseHands("Black: 2H 3D 5S 9C KD  White: 2C 3H 4S 8C AH");
	expect(result).toEqual({
		"Black" : new Hand([new Card("2H"), new Card("3D"), new Card("5S"), new Card("9C"), new Card("KD")]),
		"White" : new Hand([new Card("2C"), new Card("3H"), new Card("4S"), new Card("8C"), new Card("AH")]),
	});
})