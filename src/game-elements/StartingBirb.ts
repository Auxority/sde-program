import GameObject from "./GameObject";

export default class Birb extends GameObject {
    private _image = new Image();

    public constructor(ctx: CanvasRenderingContext2D, position: Vector) {
        super(ctx, position);

        this._image.src = './assets/favicon.svg';
    }

    public render(): void {
        this.ctx.drawImage(this._image, this.position.x, this.position.y, 200, 200);
    }
}