import Vector from "../utils/Vector";

export default class Mouse {
    private _canvas: HTMLCanvasElement;
    private _position: Vector;
    private _pressed: boolean;

    /**
     * Creates the event listener for the mouse.
     * @param canvas html canvas element
     */
    public constructor(canvas: HTMLCanvasElement) {
        this._canvas = canvas;
        this._position = new Vector(canvas.width * 0.5, canvas.height * 0.5);
        this._pressed = false;

        window.addEventListener("mouseup", this.mouseUp);
        window.addEventListener("mousedown", this.mouseDown);
        window.addEventListener("mousemove", this.mouseMove);
        window.addEventListener("touchmove", this.touchMove);
        window.addEventListener("touchstart", this.onTouch);
        window.addEventListener("touchend", this.onTouchEnd)
    }

    /**
     * Internal event which updates when the mouse button is released.
     */
    private mouseUp = (ev: MouseEvent): void => {
        // 0: Left Button, 1: Middle Button, 2: Right Button
        if (ev.button === 0) {
            this._pressed = false;
        }
    }

    /**
     * Internal event which updates when the mouse button is pressed.
     */
    private mouseDown = (ev: MouseEvent): void => {
        // 0: Left Button, 1: Middle Button, 2: Right Button
        if (ev.button === 0) {
            this._pressed = true;
        }
    }

    /**
     * Internal event which updates the x and y position when mouse movement is detected.
     */
    private mouseMove = (ev: MouseEvent): void => {
        const rect: DOMRect | ClientRect = this._canvas.getBoundingClientRect();
        this._position.set(Math.round(ev.x - rect.left), Math.round(ev.y - rect.top));
    }

    /**
     * Internal event which updates when the user moves their finger across their touchscreen.
     */
    private touchMove = (ev: TouchEvent): void => {
        const rect: DOMRect | ClientRect = this._canvas.getBoundingClientRect();
        const touch: Touch = ev.touches[0];
        this._position.set(Math.round(touch.clientX - rect.left), Math.round(touch.clientY - rect.top));
        this._pressed = false;
    }

    /**
     * Internal event which updates when the user pressed their finger on the touchscreen.
     */
    private onTouch = (ev: TouchEvent): void => {
        const rect: DOMRect = this._canvas.getBoundingClientRect();
        const touch: Touch = ev.touches[0];
        this._position.set(Math.round(touch.clientX - rect.left), Math.round(touch.clientY - rect.top));
        this._pressed = true;
    }

    /**
     * Internal event which updates when the user releases their finger from the touchscreen.
     */
    private onTouchEnd = (): void => {
        this._pressed = false;
    }

    /**
     * Gets the current x,y position of the mouse.
     */
    public get position(): Vector {
        return this._position;
    }

    /**
     * Gets the current x position of the mouse.
     */
    public get x(): number {
        return this._position.x;
    }

    /**
     * Gets the current y position of the mouse.
     */
    public get y(): number {
        return this._position.y;
    }

    /**
     * Checks if the mouse is pressed or not.
     */
    public get pressed(): boolean {
        return this._pressed;
    }

    public set pressed(isPressed: boolean) {
        this._pressed = isPressed;
    }

    /**
     * Gets the current style of the mouse cursor.
     */
    public get cursor(): string {
        return document.body.style.cursor;
    }

    /**
     * Sets the current style of the mouse cursor.
     */
    public set cursor(value: string) {
        document.body.style.cursor = value;
    }
}