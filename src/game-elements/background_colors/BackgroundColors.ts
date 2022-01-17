import Vector from "../../utils/Vector";
import Background from "../Background";
import GameObject from "../GameObject";

export default class BackgroundColor extends GameObject {
    private static readonly CURRENT_IMG = "./assets/images/backgrounds/1.png"
    private _image = new Image();
    private _sendOnScreen: boolean = false;

    public constructor(ctx: CanvasRenderingContext2D, position: Vector) {
        super(ctx, position);
        this._image.src = BackgroundColor.CURRENT_IMG;
        this.velocity.sub(new Vector(Background.BACKGROUND_SPEED, 0))
    }

    public render(): void {
        this.ctx.drawImage(this._image, this.position.x, this.position.y, this.ctx.canvas.width*2, this.ctx.canvas.height);
    }

    /**
     * check if the background appears on screen
     * @returns bool if true
     */
    public onScreen(): boolean {
        if ((this.position.x + this.ctx.canvas.width) < 0 && !this._sendOnScreen) {
            this._sendOnScreen = true;
            return true;
        }
        return false
    }

    /**
     * Check if the background is no longer visable
     * @returns bool if true
     */
    public offScreen(): boolean {
        return (this.position.x + this.ctx.canvas.width*2) < 0;
    }
}