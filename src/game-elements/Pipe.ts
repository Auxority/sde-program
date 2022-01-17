import Functions from "../utils/Functions";
import Vector from "../utils/Vector";
import GameObject from "./GameObject";

export default class Pipe extends GameObject {
    public static readonly IMAGESIZE = new Vector(32, 48);
    public static readonly EXTIMAGESIZE = new Vector(30, 32);

    private _image = new Image();
    private _extendedImage = new Image();
    // TODO: abstract pipe class for each color?
    // TODO: Pipe factory design pattern?

    public constructor(ctx: CanvasRenderingContext2D, position: Vector) {
        super(ctx, position);
        this.velocity.sub(new Vector(2, 0))
        this.setRandomPipeImage();
    }

    public render(): void {
        this.drawBottomPipe();
        this.drawTopPipe();
    }

    /**
     * Check if its already of the screen on the left
     * @returns boolean if true
     */
    public isGone(): boolean {
        return this.position.x < 0 - Pipe.IMAGESIZE.x;
    }

    /**
     * Draw the bottom pipe
     */
    private drawBottomPipe(): void {
        const positionY = (this.position.y / 10) * this.ctx.canvas.height + 50;
        this.ctx.drawImage(this._image, this.position.x, positionY);
        this.ctx.drawImage(this._extendedImage, this.position.x + 1, positionY + Pipe.IMAGESIZE.y, Pipe.EXTIMAGESIZE.x, this.ctx.canvas.height);
    }

    /**
     * Draw the top pipe
     */
    private drawTopPipe(): void {
        const positionY = ((10 - this.position.y) / 10) * this.ctx.canvas.height + 100;
        this.ctx.save();
        this.ctx.translate(0, this.ctx.canvas.height);
        this.ctx.scale(1, -1);
        this.ctx.drawImage(this._image, this.position.x, positionY);
        this.ctx.drawImage(this._extendedImage, this.position.x + 1, positionY + Pipe.IMAGESIZE.y, Pipe.EXTIMAGESIZE.x, this.ctx.canvas.height);
        this.ctx.restore();
    }

    /**
     * Get a random pipe color
     */
    private setRandomPipeImage(): void {
        const imageNumber = Math.round(Functions.getRandomArbitrary(1, 7));
        this._image.src = `./assets/images/pipes/${imageNumber}.png`;
        this._extendedImage.src = `./assets/images/extend_pipes/${imageNumber}.png`;
    }
}