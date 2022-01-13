import StartButton from "./custom-elements/StartButton";
import StartingBirb from "./game-elements/StartingBirb";
import Resizer from "./utils/Resizer";
import { Vector } from "./utils/Vector";

export default class Game {
    // elements
    private _startButton: StartButton;
    private _startingBirb: StartingBirb;

    private _running: boolean;

    private _canvas: HTMLCanvasElement;
    private _ctx: CanvasRenderingContext2D;
    private _resizer: Resizer;

    public constructor(canvasId: string) {
        this._canvas = document.getElementById(canvasId) as HTMLCanvasElement;
        this._ctx = this._canvas.getContext("2d") as CanvasRenderingContext2D;
        this._resizer = new Resizer(this._canvas);
        this._startButton = new StartButton(this);
        this._startingBirb = new StartingBirb(this._ctx, new Vector(0, -8));

        this._running = false;

        requestAnimationFrame(this.loop);
    }

    public start(): void {
        this._resizer.enableAutoResize();
        this._running = true;
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
        if (!this._running) {
            this.drawOnStart();
        }
    }

    private clear(): void {
        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }

    private drawOnStart(): void {
        this._startingBirb.render();

    }

}