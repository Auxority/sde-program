export default class Resizer {
    public static readonly INITIAL_CANVAS_SIZE = 500;

    private _canvas: HTMLCanvasElement;
    private _autoResize: boolean;

    /**
     * Initialize resizer
     * @param canvas HTML Canvas to resize
     */
    public constructor(canvas: HTMLCanvasElement) {
        this._canvas = canvas;
        this._canvas.width = Resizer.INITIAL_CANVAS_SIZE;
        this._canvas.height = Resizer.INITIAL_CANVAS_SIZE;
        this._autoResize = false;
        window.addEventListener('resize', () => this.onResize());
        this.onResize();
    }

    /**
     * Start resizing the canvas
     */
    public enableAutoResize(): void {
        this._autoResize = true;
        this.onResize();
    }

    /**
     * Set the browser to fullscreen
     */
    public enableFullscreen(): void {
        this._canvas.requestFullscreen();
    }

    /**
     * Makes sure that the window always has a 1:1 ratio.
     * And adjusts itself when the user resizes their browser.
     */
    private onResize(): void {
        if (this._autoResize) {
            const smallestSize: number = Math.min(window.innerWidth, window.innerHeight) * 0.9;
            this._canvas.width = smallestSize;
            this._canvas.height = smallestSize;
        }
    }
}