import Game from "../Game";
import Resizer from "../utils/Resizer";

export default class StartButton {
    private _currentGame: Game;
    private _button: HTMLButtonElement;

    /**
     * Create the start button
     * @param currentGame The game itself for starting on press
     */
    public constructor(currentGame: Game) {
        this._currentGame = currentGame;
        this._button = document.createElement("button");
        this._button.innerText = "START";
        this._button.id = "start-button";
        this._button.style.width = `${Resizer.INITIAL_CANVAS_SIZE}px`;
        this._button.style.height = `${Resizer.INITIAL_CANVAS_SIZE * 0.2}px`;

        document.body.appendChild(this._button);

        this.addStartButtonEvent();
    }

    /**
     * add event listener to start the game on click
     * @param startButton HTML button
     */
    private addStartButtonEvent() {
        this._button.addEventListener("click", () => this.onStartButtonClicked());
    }

    /**
     * Start the game and remove the button
     * @param startButton HTML button
     */
    private onStartButtonClicked(): void {
        this._currentGame.start();
        this._button.remove();
    }
}