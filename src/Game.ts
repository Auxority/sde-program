export default class Game {
    private _canvas: HTMLCanvasElement;
    private _ctx: CanvasRenderingContext2D;
    private _running: boolean;

    public constructor(canvasId: string) {
        this._canvas = document.getElementById(canvasId) as HTMLCanvasElement;
        this._ctx = this._canvas.getContext("2d") as CanvasRenderingContext2D;
        this._running = false;
        this.enableFullscreen();
    }

    public enableFullscreen(): void {
        this._canvas.width = window.innerWidth;
        this._canvas.height = window.innerHeight;
        this._canvas.requestFullscreen();
    }

    public get running(): boolean {
        return this._running;
    }
}