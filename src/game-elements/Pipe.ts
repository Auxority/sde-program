import Functions from "../utils/Functions";
import Vector from "../utils/Vector";
import GameObject from "./GameObject";

export default class Pipe extends GameObject {
    private _image = new Image();
    private _extendedImage = new Image();
    // TODO: abstract pipe class for each color?
    // TODO: Pipe factory design pattern?

    public constructor(ctx: CanvasRenderingContext2D, position: Vector) {
        super(ctx, position);

        this.setRandomPipeImage();
    }

    public update(): void {
        throw new Error("Method not implemented.");
    }

    public render(): void {
        this.ctx.drawImage(this._image, this.position.x, this.position.y);
    }

    private setRandomPipeImage(): void {
        const imageNumber = Functions.getRandomArbitrary(1, 7);
        this._image.src = `./assets/images/pipes/${imageNumber}.png`;
        this._extendedImage.src = `./assets/images/extend_pipes/${imageNumber}.png`;
    }
}