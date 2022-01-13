import StartButton from "./custom-elements/StartButton";
import Resizer from "./utils/Resizer";
import * as GameStates from "./game-states/GameStateExports";
import GameState from "./game-states/GameState";

export default class Game {
    // elements
    private _startButton: StartButton;
    private _state: GameState;

    private _canvas: HTMLCanvasElement;
    private _ctx: CanvasRenderingContext2D;
    private _resizer: Resizer;

    public constructor(canvasId: string) {
        this._canvas = document.getElementById(canvasId) as HTMLCanvasElement;
        this._ctx = this._canvas.getContext("2d") as CanvasRenderingContext2D;
        this._resizer = new Resizer(this._canvas);
        this._startButton = new StartButton(this);

        this._state = new GameStates.Starting(this._ctx);

        requestAnimationFrame(this.loop);
    }

    /**
     * when the "start" button of the game is pressed, to start the game
     */
    public start(): void {
        this._resizer.enableAutoResize();
        this._state = new GameStates.Running(this._ctx);
    }

    /**
     * Main game loop
     */
    private loop = (): void => {
        this.clear();
        this.update();
        this.render();

        requestAnimationFrame(this.loop);
    }

    /**
     * Call the updater in current state
     */
     private update(): void {
        this._state.update();
    }

    /**
     * Call the renderer in current state
     */
    private render(): void {
        this._state.render();
    }

    /**
     * Clear the canvas
     */
    private clear(): void {
        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }
}