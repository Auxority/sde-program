import StartButton from "./custom-elements/StartButton";
import Resizer from "./utils/Resizer";
import * as GameStates from "./game-states/GameStateExports";
import GameState from "./game-states/GameState";
import Vector from "./utils/Vector";
import FrameLimiter from "./utils/FrameLimiter";

export default class Game {
    public static readonly GRAVITY = new Vector(0, -0.2);
    private static game: Game;
    // elements
    private _startButton: StartButton;
    private _state: GameState;

    private _canvas: HTMLCanvasElement;
    private _ctx: CanvasRenderingContext2D;
    private _resizer: Resizer;
    private _frameLimit: FrameLimiter;

    private constructor(canvasId: string) {
        this._canvas = document.getElementById(canvasId) as HTMLCanvasElement;
        this._ctx = this._canvas.getContext("2d") as CanvasRenderingContext2D;
        this._resizer = new Resizer(this._canvas);
        this._startButton = new StartButton(this);
        this._frameLimit = new FrameLimiter();

        this._state = new GameStates.Starting(this._ctx);

        requestAnimationFrame(this.loop);
    }

    /**
     * Use game as singleton
     * @param camvasId of the canvas to render the game in
     * @returns a new or already created game object
     */
    public static getGame(canvasId: string): Game {
        if (!this.game) {
            this.game = new Game(canvasId);
        }
        return this.game;
    }

    /**
     * When the "start" button of the game is pressed, to start the game
     */
    public start(): void {
        this._resizer.enableAutoResize();
        this._state = new GameStates.Running(this._ctx, this);
    }

    /**
     * When a pipe is hit within the game
     */
    public end(): void {
        this._state = new GameStates.Ending(this._ctx, this);
    }

    /**
     * Main game loop
     */
    private loop = (): void => {
        this.clear();
        this.processInput();
        if (this._frameLimit.withinLimit()) {
            this.update();
        }
        this.render();

        requestAnimationFrame(this.loop);
    }

    /**
     * Call the input processor in the current state
     */
    private processInput(): void {
        this._state.processInput();
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