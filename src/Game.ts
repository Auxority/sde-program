import StartButton from "./custom-elements/StartButton";
import Resizer from "./utils/Resizer";

export default class Game {
    // elements
    private _startButton: StartButton;

    private _canvas: HTMLCanvasElement;
    private _ctx: CanvasRenderingContext2D;
    private _resizer: Resizer;

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
        this.clear();

        requestAnimationFrame(this.loop);
    }

    private clear(): void {
        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }
}