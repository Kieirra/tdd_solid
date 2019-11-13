import Game from "./Game.js";
import Parser from "./Parser";
import Card from "./Card.js";

/**
 *  @type {Game} game 
 */
let game;
beforeEach(() => {
	game = new Game(new Parser());
})

it("should make white win with Ace card High Card", () => {
	const result = game.play("Black: 2H 3D 5S 9C KD  White: 2C 3H 4S 8C AH");
	expect(result).toBe("White wins. - with high card: Ace");
})

it("should make white win with King card High Card", () => {
	const result = game.play("Black: 2H 3D 5S 9C 10D  White: 2C 3H 4S 8C KH");
	expect(result).toBe("White wins. - with high card: King");
})

it("should make black win with King card High Card", () => {
	const result = game.play("Black: 2H 3D 5S 9C KD  White: 2C 3H 4S 8C QH");
	expect(result).toBe("Black wins. - with high card: King");
})

it("should make black win with second highest", () => {
	const result = game.play("Black: 2H 3D 5S 9C KD  White: 2C 3H 4S 8C KH");
	expect(result).toBe("Black wins. - with high card: 9");
})

it("should tie when same high card", () => {
	const result = game.play("Black: 2H 3D 5S 9C KD  White: 2H 3D 5S 9C KD");
	expect(result).toBe("Tie.");
})

it("should make black win by Pair", () => {
	const result = game.play("Black: 2H 3D 5S KC KD  White: 2H 3D 5S 9C KS");
	expect(result).toBe("Black wins. - with pair: King");
})

it("should make white win by Pair", () => {
	const result = game.play("Black: 2H 3D 5S 9C KS  White: 2H 3D 5S KC KD");
	expect(result).toBe("White wins. - with pair: King");
})

it("should make white win with highest Pair", () => {
	const result = game.play("Black: 2H 3D 5S KH KS  White: 2H 3D 7S AC AD");
	expect(result).toBe("White wins. - with pair: Ace");
})

it("should make white win by High card because two player have pairs", () => {
	const result = game.play("Black: 2H 3D 5S KH KS  White: 2H 3D 7S KC KD");
	expect(result).toBe("White wins. - with high card: 7");
})

it("should display winner", () => {
	const result = game.print({ winner: 'White', pokerHands: 'pair', card: new Card("AH") });
	expect(result).toBe("White wins. - with pair: Ace");
})

it("should display tie", () => {
	const result = game.printTie();
	expect(result).toBe("Tie.");
})

// TODO : 
// 
// Game : Séparer Texte de la logique
// Tie Pair ?
// Changer getHighestPair to getPair