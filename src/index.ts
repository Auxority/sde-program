import Game from "./Game";

const onWindowResize = (game: Game): void => {
	if (game.running) {
		game.enableFullscreen();
	}
}

window.addEventListener("load", () => {
	const game = new Game("game-canvas");
	onWindowResize(game);
});