import { BackgroundColor } from "../enums/BackgroundColor";
import Functions from "../utils/Functions";
import Vector from "../utils/Vector";
import GameObject from "./GameObject";

export default class Background extends GameObject {
    private _color: BackgroundColor;

    public constructor(ctx: CanvasRenderingContext2D, position: Vector) {
        super(ctx, position);
        this._color = Functions.getRandomEnum(BackgroundColor);
    }

    public render(): void {
        this.ctx.save();
        this.ctx.fillStyle = this._color;
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.ctx.restore();
    }
}