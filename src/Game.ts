import StartButton from "./assets/StartButton";
import Resizer from "./utils/Resizer";

export default class Game {
    // elements
    private _startButton: StartButton;

    private _canvas: HTMLCanvasElement;
    private _resizer: Resizer;
    private _ctx: CanvasRenderingContext2D;

    public constructor(canvasId: string) {
        this._canvas = document.getElementById(canvasId) as HTMLCanvasElement;
        this._ctx = this._canvas.getContext("2d") as CanvasRenderingContext2D;
        this._resizer = new Resizer(this._canvas);
        this._startButton = new StartButton(this);

        requestAnimationFrame(this.loop);
    }

    public start(): void {
        this._resizer.enableAutoResize();
    }

    /**
     * Main game loop
     */
    private loop = (): void => {
        // WOOOOW

        requestAnimationFrame(this.loop);
    }
}