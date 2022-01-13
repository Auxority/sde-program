export default class Resizer {
    private _autoResize: boolean;
    private _canvas: HTMLCanvasElement;

    /**
     * Initialize resizer
     * @param canvas HTML Canvas to resize
     */
    public constructor(canvas: HTMLCanvasElement) {
        this._canvas = canvas;
        this._autoResize = false;
        window.addEventListener('resize', () => this.onResize());
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
            const smallestSize: number = Math.min(window.innerWidth, window.innerHeight);
            this._canvas.width = smallestSize;
            this._canvas.height = smallestSize;
        }
    }
}