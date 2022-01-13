import GameObject from "./GameObject";

export default class Birb extends GameObject {
    public constructor(ctx: CanvasRenderingContext2D, position: Vector) {
        super(ctx, position);
    }

    public render(): void {
        // this.ctx.drawImage();
    }
}