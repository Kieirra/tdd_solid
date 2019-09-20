import Game from "./Game.js";

/**
 *  @type {Game} game 
 */
let game;
beforeEach(() => {
	game = new Game();
})

it("should be defined after instanciation", () => {
	expect(game).toBeDefined();
})
	