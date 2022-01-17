import Functions from "../../utils/Functions";
import Vector from "../../utils/Vector";
import Birb from "../Birb";
import State from "./BirbState";

export default class FlyState implements State {
    private _image = new Image();

    constructor() {
        this._image = Functions.createImage(this.getImageSource());
    }

    public update(position: Vector, velocity: Vector, acceleration: Vector): void {
        // empty
        // acceleration.add(new Vector(0, -3));
    }

    public render(ctx: CanvasRenderingContext2D, position: Vector): void {
        // Empty filler
        ctx.drawImage(this._image, position.x, position.y);
    }

    public getImage(): HTMLImageElement {
        return this._image;
    }

    private getImageSource(): string {
        return `${Birb.STATE_IMAGE_DIR}/fly.png`;
    }
}