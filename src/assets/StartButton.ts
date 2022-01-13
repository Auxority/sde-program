import Game from "../Game";

export default class StartButton {
    private _currentGame: Game;

    /**
     * Create the start button
     * @param currentGame The game itself for starting on press
     */
    public constructor(currentGame: Game) {
        this._currentGame = currentGame;
        const button = document.createElement("button");
        button.innerText = "Start";
        button.id = "start-button";

        document.body.appendChild(button);

        this.addStartButtonEvent(button);
    }

    /**
     * add event listener to start the game on click
     * @param startButton HTML button
     */
    private addStartButtonEvent(startButton: HTMLButtonElement) {
        startButton.addEventListener("click", () => this.onStartButtonClicked(startButton));
    }

    /**
     * Start the game and remove the button
     * @param startButton HTML button
     */
    private onStartButtonClicked(startButton: HTMLButtonElement): void {
        this._currentGame.start();
        startButton.remove();
    }
}