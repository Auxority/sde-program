export default class Resizer {
    private _canvas: HTMLCanvasElement;
    private _running: boolean = false;

    public constructor(canvas: HTMLCanvasElement) {
        this._canvas = canvas;
        window.addEventListener('resize', () => this.onResize());
    }

    private onResize(): void {
        if (this._running) {
            this.resizer();
        }
    }

    private resizer(): void {
        this._canvas.width = window.innerWidth;
        this._canvas.height = window.innerHeight;
    }

    public enableFullscreen(): void {
        this._canvas.requestFullscreen();
    }

    public startGame(): void {
        this._running = true;
    }

    public get running(): boolean {
        return this._running;
    }
}