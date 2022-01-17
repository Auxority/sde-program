import Functions from "../../utils/Functions";
import Vector from "../../utils/Vector";
import GameObject from "../GameObject";

export default class Pipes extends GameObject {
    public static readonly IMAGE_SIZE = new Vector(32, 48);
    public static readonly EXT_IMAGE_SIZE = new Vector(30, 32);
    public static readonly PIPE_SPEED = 2.5;
    public static readonly PIPE_GAP = 150;

    private _image = new Image();
    private _extendedImage = new Image();
    // TODO: Pipe factory design pattern?

    public constructor(ctx: CanvasRenderingContext2D, position: Vector) {
        super(ctx, position);
        this.velocity.sub(new Vector(Pipes.PIPE_SPEED, 0))
        this.setRandomPipeImage();
    }

    public render(): void {
        this.drawBottomPipe();
        this.drawTopPipe();
    }

    public getXPosition(): number {
        return this.position.x;
    }

    /**
     * Check if its already of the screen on the left
     * @returns boolean if true
     */
    public isGone(): boolean {
        return this.position.x < 0 - Pipes.IMAGE_SIZE.x;
    }

    /**
     * Draw the bottom pipe
     */
    private drawBottomPipe(): void {
        this.ctx.drawImage(this._image, this.position.x, this.position.y);
        this.ctx.drawImage(this._extendedImage, this.position.x + 1, this.position.y + Pipes.IMAGE_SIZE.y, Pipes.EXT_IMAGE_SIZE.x, this.ctx.canvas.height);
    }

    /**
     * Draw the top pipe
     */
    private drawTopPipe(): void {
        const positionY = this.ctx.canvas.height - this.position.y + Pipes.PIPE_GAP;
        this.ctx.save();
        this.ctx.translate(0, this.ctx.canvas.height);
        this.ctx.scale(1, -1);
        this.ctx.drawImage(this._image, this.position.x, positionY);
        this.ctx.drawImage(this._extendedImage, this.position.x + 1, positionY + Pipes.IMAGE_SIZE.y, Pipes.EXT_IMAGE_SIZE.x, this.ctx.canvas.height);
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