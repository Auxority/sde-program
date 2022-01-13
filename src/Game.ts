import Resizer from "./Resizer";

export default class Game {
    private _canvas: HTMLCanvasElement;
    private _resizer: Resizer;
    private _ctx: CanvasRenderingContext2D;

    public constructor(canvasId: string) {
        this._canvas = document.getElementById(canvasId) as HTMLCanvasElement;
        this._ctx = this._canvas.getContext("2d") as CanvasRenderingContext2D;
        this._resizer = new Resizer(this._canvas);
    }

}