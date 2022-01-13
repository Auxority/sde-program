import "./enums/GameState";
import StartButton from "./custom-elements/StartButton";
import StartingBirb from "./game-elements/StartingBirb";
import Resizer from "./utils/Resizer";

export default class Game {
    // elements
    private _startButton: StartButton;
    private _startingBirb: StartingBirb;

    private _state: GameState;

    private _canvas: HTMLCanvasElement;
    private _ctx: CanvasRenderingContext2D;
    private _resizer: Resizer;

    public constructor(canvasId: string) {
        this._canvas = document.getElementById(canvasId) as HTMLCanvasElement;
        this._ctx = this._canvas.getContext("2d") as CanvasRenderingContext2D;
        this._resizer = new Resizer(this._canvas);
        this._startButton = new StartButton(this);
        // TODO: cant find Vector browser bug
        this._startingBirb = new StartingBirb(this._ctx, new Vector(0, -8));

        this._state = GameState.start;

        requestAnimationFrame(this.loop);
    }

    public start(): void {
        this._resizer.enableAutoResize();
        this._state = GameState.running;
    }

    /**
     * Main game loop
     */
    private loop = (): void => {
        this.clear();
        this.render();

        requestAnimationFrame(this.loop);
    }

    private render(): void {
        if (this._state === GameState.start) {
            this._startingBirb.render();
        }
    }

    private clear(): void {
        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }

}