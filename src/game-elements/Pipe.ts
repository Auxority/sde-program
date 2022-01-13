import Functions from "../utils/Functions";
import GameObject from "./GameObject";

export default class Pipe extends GameObject {
    private _image = new Image();
    private _extendedImage = new Image();
    // TODO: abstract pipe class for each color?

    public constructor(ctx: CanvasRenderingContext2D, position: Vector) {
        super(ctx, position);

        const imageNumber = Functions.getRandomArbitrary(1, 7);
        this._image.src = `./assets/images/pipes/${imageNumber}.png`;
        this._extendedImage.src = `./assets/images/extend_pipes/${imageNumber}.png`;
    }

    public render(): void {
        this.ctx.drawImage(this._image, this.position.x, this.position.y);
    }
}